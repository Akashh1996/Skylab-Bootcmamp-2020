import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AuthorsFollowingComponent } from './authors-following.component'
import { RouterModule } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserService } from 'src/app/service/user.service'
import { of } from 'rxjs'

describe('AuthorsFollowingComponent', () => {
  let component: AuthorsFollowingComponent
  let fixture: ComponentFixture<AuthorsFollowingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [AuthorsFollowingComponent],
      providers: [{ provide: UserService, useValue: { getFavAuthors: () => of(null) } }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ uid: 12 }))
    fixture = TestBed.createComponent(AuthorsFollowingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /* it('should call followAuthor ', (done) => {
    const spyFn = spyOn(component, 'followAuthor').and.callThrough()
    const deleteButton = fixture.nativeElement.querySelector('.material_icon-deleteAuthor')
    deleteButton.click()
    expect(spyFn).toHaveBeenCalled()
    done()
  }) */
})
