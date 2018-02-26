import { Injectable } from "@angular/core"

import { LEVELS } from "../games.constant.js"

@Injectable()
export class MemoryGameService {
  // play(card, previous) {
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
  // flippOff(card1, card2)
  // }
  play(card, previous, cardsFound, total) {
    if (!previous) {
      this.flippOn(card)
      previous = card
    } else {
      if (card.id === previous.id) {
        cardsFound += 2
        if (cardsFound === total) {
          this.playCheeringAudio()
        }
      } else {
        setTimeout(this.flippOff, 1000)
      }
    }
  }

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

  playCheeringAudio() {
    cheeringAudio.play()
  }
}
