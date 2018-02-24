import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { FooterComponent } from "./footer/footer.component"
import { BodyComponent } from "./body/body.component"
import { BottomComponent } from "./bottom/bottom.component"
import { AppRoutingModule } from ".//app-routing.module"
import { GamesComponent } from "./games/games.component"
import { ColoringComponent } from "./coloring/coloring.component"
import { LearningComponent } from "./learning/learning.component"
import { StoriesComponent } from "./stories/stories.component"
import { InventoryComponent } from "./inventory/inventory.component"
import { ThemesComponent } from "./shared/themes/themes.component"
import { MemoryGameComponent } from "./games/memory-game/memory-game.component"
import { LevelButtonsComponent } from "./games/level-buttons/level-buttons.component";
import { CardComponent } from './games/memory-game/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    BottomComponent,
    GamesComponent,
    ColoringComponent,
    LearningComponent,
    StoriesComponent,
    InventoryComponent,
    ThemesComponent,
    MemoryGameComponent,
    LevelButtonsComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
