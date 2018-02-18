import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { BodyComponent } from "./body/body.component"
import { InventoryComponent } from "./inventory/inventory.component"
import { GamesComponent } from "./games/games.component"
import { ColoringComponent } from "./coloring/coloring.component"
import { LearningComponent } from "./learning/learning.component"
import { StoriesComponent } from "./stories/stories.component"

const routes: Routes = [
  { path: "", component: BodyComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "games", component: GamesComponent },
  { path: "coloring", component: ColoringComponent },
  { path: "learning", component: LearningComponent },
  { path: "stories", component: StoriesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
