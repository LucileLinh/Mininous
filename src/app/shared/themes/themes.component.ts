import { Component, OnInit } from "@angular/core"
import { THEMES } from "../mock-themes"
import { Theme } from "../theme"

@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.css"],
})
export class ThemesComponent implements OnInit {
  themes = THEMES
  selectedTheme: Theme
  onSelect(theme: Theme, selectTheme: Function): void {
    this.selectedTheme = theme
    selectTheme(this.selectedTheme)
  }

  constructor() {}

  ngOnInit() {}
}
