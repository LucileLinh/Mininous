import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { THEMES } from "../../shared/themes/themes.constant"
import { Theme } from "../theme"

@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.css"],
})
export class ThemesComponent implements OnInit {
  themes: Array<Theme>
  selectedId: string
  @Output() onSelectTheme: EventEmitter<Theme> = new EventEmitter()

  selectTheme(theme: Theme) {
    this.selectedId = theme.id
    this.onSelectTheme.emit(theme)
  }

  ngOnInit() {
    this.themes = THEMES
    this.selectedId = THEMES[1].id
  }
}
