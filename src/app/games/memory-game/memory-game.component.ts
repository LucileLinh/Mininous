import { Component, OnInit, Input } from "@angular/core"
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations"

import { Theme } from "../../shared/theme"
import { SAVANE, FRUITS, NUMBERS, ALPHABET } from "../../../CONSTANTS/constants"
import { THEMES } from "../../shared/themes/themes.constant"
import { LEVELS } from "./../games.constant"
import { shuffle, getPairs } from "../../utils/arrayUtils"

@Component({
  selector: "app-memory-game",
  templateUrl: "./memory-game.component.html",
  styleUrls: ["./memory-game.component.css"],
})
export class MemoryGameComponent implements OnInit {
  total: number
  cardSize: string
  cards = []
  cardsFound = 0
  previous = null

  @Input("level") level: any
  @Input("theme") theme: Theme

  play(card) {
    console.log(card)
    if (!this.previous) {
      this.flippOn(card)
      this.previous = card
    } else {
      if (card.id === this.previous.id) {
        this.previous = null
        this.cardsFound += 2
        if (this.cardsFound === this.total) {
          // this.playCheeringAudio()
          alert("ook")
        }
      } else {
        setTimeout(this.flippOff(card, this.previous), 1000)
      }
    }
  }

  flippOn(card) {
    const front = this.getCardElement(card).firstChild
    const back = this.getCardElement(card).nextSibling
    console.log(front)
    back.style.transform = "perspective(600px) rotateY(-180deg)"
    front.style.transform = "perspective(600px) rotateY(0deg)"
    this.playAudio(card)
  }

  flippOff(card1, card2) {
    const front1 = card1.firstChild
    const back1 = front1.nextSibling
    back1.style.transform = "perspective(600px) rotateY(0deg)"
    front1.style.transform = "perspective(600px) rotateY(180deg)"
    const front2 = card2.firstChild
    const back2 = front2.nextSibling
    back2.style.transform = "perspective(600px) rotateY(0deg)"
    front2.style.transform = "perspective(600px) rotateY(180deg)"
  }

  playAudio(el) {
    el.lastChild[0].play()
  }

  getCardElement(card) {
    const id = "card-" + card.id
    return document.getElementById(id)
  }

  ngOnInit() {}

  ngOnChanges() {
    this.total = this.level.cards
    this.cardSize = this.level.size
    let items
    switch (this.theme.name) {
      case "alphabet":
        items = shuffle(getPairs(ALPHABET, this.total))
        break
      case "number":
        items = shuffle(getPairs(NUMBERS, this.total))
        break
      default:
        items = shuffle(getPairs(FRUITS.concat(SAVANE), this.total))
    }
    this.cards = []
    for (let i = 0; i < this.total; i++) {
      this.cards.push(items[i])
    }
    console.log(this.cards)
  }
}
