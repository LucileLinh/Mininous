import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { LevelButtonsComponent } from "./level-buttons.component"

describe("LevelbuttonsComponent", () => {
  let component: LevelButtonsComponent
  let fixture: ComponentFixture<LevelButtonsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LevelButtonsComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelButtonsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
