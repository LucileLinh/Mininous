import { Component, OnInit } from "@angular/core"

import { ThemesComponent } from "../shared/themes/themes.component"
import { MemoryGameComponent } from "./memory-game/memory-game.component"
import { LevelButtonsComponent } from "./level-buttons/level-buttons.component"
import { Theme } from "../shared/theme"
import { THEMES } from "../shared/themes/themes.constant"
import { LEVELS } from "./games.constant"

@Component({
  selector: "app-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.css"],
})
export class GamesComponent implements OnInit {
  private level = LEVELS[0]
  private theme = THEMES[1]

  selectTheme(theme): void {
    this.theme = theme
  }

  setLevel(level): void {
    this.level = level
  }

  ngOnInit() {}
}
