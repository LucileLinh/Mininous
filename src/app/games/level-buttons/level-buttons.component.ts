import { Component, OnInit, Output, EventEmitter } from "@angular/core"

import { LEVELS } from "../games.constant"

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
    this.onSelectLevel.emit(level)
  }

  ngOnInit() {
    this.levels = LEVELS
    this.selectedLevelId = LEVELS[0].id
  }
}
