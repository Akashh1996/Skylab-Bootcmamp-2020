import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LastReadArticlesComponent } from './last-read-articles.component'
import { RouterModule } from '@angular/router'
import { UserService } from 'src/app/service/user.service'
import { of } from 'rxjs'

describe('LastReadArticlesComponent', () => {
  let component: LastReadArticlesComponent
  let fixture: ComponentFixture<LastReadArticlesComponent>
  const article = {
    results: [{
      abstract: null,
      authors: ['Edith'],
      id: '123456',
      issuedate: '1987',
      journaltitle: 'Journal of Economic Perspectives',
      source_created: '2020-10-30T12:33:57.430731',
      title: 'Household Behavior and the Tax Reform Act of 1986.'
    }]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [LastReadArticlesComponent],
      providers: [{ provide: UserService, useValue: { getFavArticles: () => of(article.results) } }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ uid: 12 }))
    fixture = TestBed.createComponent(LastReadArticlesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
