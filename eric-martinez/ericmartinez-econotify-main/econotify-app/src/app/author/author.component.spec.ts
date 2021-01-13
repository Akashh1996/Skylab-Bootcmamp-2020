import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthorComponent } from './author.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthorComponent', () => {
  let component: AuthorComponent
  let fixture: ComponentFixture<AuthorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{ path: 'authorName/:authorUid', component: AuthorComponent }])]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call goBack fn', (done) => {
    spyOn(component, 'goBack').and.callThrough()
    const compiled = fixture.nativeElement
    const searchButton = compiled.querySelector('.button_back')
    searchButton.click()
    expect(component.goBack).toHaveBeenCalled()
    done()
  })
})
