import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SideNavbarComponent } from './side-navbar.component'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('SideNavbarComponent', () => {
  let component: SideNavbarComponent
  let fixture: ComponentFixture<SideNavbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), RouterTestingModule],
      declarations: [SideNavbarComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should call open and close nav bar', () => {
    component.openSidebar()
    component.closeSidebar()
    component.onTop()
  })
})
