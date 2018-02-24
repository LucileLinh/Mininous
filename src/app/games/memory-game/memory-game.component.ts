import { Component, OnInit, Input } from "@angular/core"

import { Theme } from "../../shared/theme"
import { THEMES } from "../../shared/mock-themes"
import fruits from "../../../CONSTANTS/fruits"
import levels from "../games.constant"

@Component({
  selector: "app-memory-game",
  templateUrl: "./memory-game.component.html",
  styleUrls: ["./memory-game.component.css"],
})
export class MemoryGameComponent implements OnInit {
  cardsCount: number
  cardSize: string
  cards = []
  @Input("level")
  set level(value: any) {
    this.cardsCount = value.cards
    this.cardSize = value.size
  }

  @Input("theme")
  set theme(value: any) {
    for (let i = 0; i < this.cardsCount; i++) {
      this.cards.push(fruits[i])
    }
  }

  ngOnInit() {}
}
