import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProfileSidebarComponent } from './profile-sidebar.component'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('ProfileSidebarComponent', () => {
  let component: ProfileSidebarComponent
  let fixture: ComponentFixture<ProfileSidebarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), RouterTestingModule],
      declarations: [ProfileSidebarComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should open and close sidebar', () => {
    component.logout()
    component.openProfileSidebar()
    component.closeProfileSidebar()
  })
})
