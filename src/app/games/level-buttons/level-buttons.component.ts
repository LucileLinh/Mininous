import { Component, OnInit, Output, EventEmitter } from "@angular/core"

import levels from "../games.constant"

@Component({
  selector: "app-level-buttons",
  templateUrl: "./level-buttons.component.html",
  styleUrls: ["./level-buttons.component.css"],
})
export class LevelButtonsComponent implements OnInit {
  selectedLevelId: number
  levels: Array<any>
  @Output() onSelectLevel: EventEmitter<number> = new EventEmitter()

  setLevel(level) {
    this.selectedLevelId = level.id
    console.log(level)
    this.onSelectLevel.emit(level)
  }

  ngOnInit() {
    this.levels = levels
    this.selectedLevelId = levels[0].id
  }
}
