import { Injectable } from "@angular/core"

import { LEVELS } from "../games.constant.js"

@Injectable()
export class MemoryGameService {
  flippOn(card) {
    const front = card.firstChild
    const back = front.nextSibling
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

  playCheeringAudio(cheeringAudio) {
    cheeringAudio.play()
  }
}
