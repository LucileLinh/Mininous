import { Injectable } from "@angular/core"

import fruits from "../../CONSTANTS/fruits.js"
import animals from "../../CONSTANTS/animals.js"
import numbers from "../../CONSTANTS/numbers.js"
import alphabet from "../../CONSTANTS/alphabet.js"
import levels from "./games.constant.js"
import arrayShuffle from "../utils/arrayShuffle.js"

@Injectable()
export class GamesService {
  generateGame(index) {
    let num = levels[index].cards
    let cardDim = levels[index].size
    let imgFound = 0
    let flippedCardId = []
    let flippedCardAlt = []
    let tabCardsVal = new Array(num)
  }
  resetGame() {}
  restartGame() {}
  selectTheme() {}
  setLevel() {}
  flipOn() {}
  flippOff() {}
  playAudioId(el) {
    el.getElementsByTagName("audio")[0].play()
  }
  playAudioCheering() {
    cheeringAudio.play()
  }
}
