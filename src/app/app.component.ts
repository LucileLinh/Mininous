import { Component } from "@angular/core"
import { HeaderComponent } from "./header/header.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { FooterComponent } from "./footer/footer.component"
import { BodyComponent } from "./body/body.component"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Mininous"
  description = "A funny app for children!"
  note = "mininous website is under reconstruction. Main functionalites are disable!"
}
