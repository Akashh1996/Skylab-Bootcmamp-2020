import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { of } from 'rxjs'
import { ArticleService } from '../service/article.service'
import { UserService } from '../service/user.service'

import { ArticleDetailComponent } from './detail.component'

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent
  let fixture: ComponentFixture<ArticleDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [ArticleDetailComponent],
      providers: [
        { provide: Location },
        { provide: UserService, useValue: { askIfSaveArticle: () => of(null) } },
        { provide: ArticleService, useValue: { getArticle: () => of(null) } }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call goback fn', () => {
    spyOn(component.location, 'back')
    component.goBack()
    expect(component.goBack).toBeDefined()
    expect(component.location.back).toHaveBeenCalled()
  })

  it('call ifSaveArticle fn', () => {
    const spyFn = spyOn(component, 'ifSaveArticle')
    component.ifSaveArticle('gdyugqygwq')
    expect(spyFn).toHaveBeenCalled()
  })
})
