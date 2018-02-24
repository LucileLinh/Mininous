import { Injectable } from "@angular/core"

import fruits from "../../CONSTANTS/fruits.js"
import animals from "../../CONSTANTS/animals.js"
import numbers from "../../CONSTANTS/numbers.js"
import alphabet from "../../CONSTANTS/alphabet.js"
import levels from "./games.constant.js"
import arrayShuffle from "../utils/arrayShuffle.js"

@Injectable()
export class GamesService {
  // let cardsCount= levels[index].cards
  // let cardDim = levels[index].size
  // let cardsFound = 0
  // let flippedCards = []
  // let allCards = new Array(cardsCount)
  // let cardsLib = [] //TODO
  // generateGame(level) {
  //   for (let i = 0; i < levels[level].cards; i += 2) {
  //       do {
  //           var x = Math.floor(Math.random() * cardsLib.length);
  //       } while (allCards.indexOf(x) >= 0);
  //       allCards[i] = allCards[i + 1] = x;
  //   }
  //   allCards= arrayShuffle(allCards)
  // }
  // resetGame() {
  //   cardsFound = 0
  //   flippedCards = []
  //  allCards = new Array(cardsCount)
  //   generateGame(level)
  // }
  // selectTheme(theme) {
  // }
  // setLevel(level) {
  //   allCards = new Array(levels[level].cards)
  // }
  // play(card) {
  //   let flippedOn = false
  //   if (!flippedOn && flippedCards.length <2 ) {
  //     flipOn(card)
  //     playAudio(card)
  //     if (flippedCards.length < 2) {
  //       flippedCards.push(card)
  //       if (flippedCards.length === 2 ) {
  //         if (flippedCards[0].id == flippedCards[1].id) {
  //           cardsFound += 2;
  //         }
  //         if (cardsFound == allCards.length) {
  //           setTimeout(showMsg, 500);
  //           playAudioCheering();
  //         }
  //       }
  //     } else {
  //       setTimeout(flippedOffAll(flippedCards), 1000)
  //     }
  //   }
  // }
  // flippedOffAll(flippedCards) {
  //   flippOff(flippedCards[0])
  //   flippOff(flippedCards[1])
  // }
  // flippOff() {
  // }
  // playAudio(el) {
  //   el.getElementsByTagName("audio")[0].play()
  // }
  // playAudioCheering() {
  //   cheeringAudio.play()
  // }
}
