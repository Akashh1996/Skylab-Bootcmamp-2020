import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'

import { ListComponent } from './list.component'

import { MatDialog } from '@angular/material/dialog'
import { ArticleService } from '../service/article.service'
import { of } from 'rxjs'

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>
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
  const articleServiceStub = {
    articles$: of(article),
    getArticle: () => {}
  }
  const matDialogStub = {
    open: () => {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [ListComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: ArticleService, useValue: articleServiceStub }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call openDialog fn', (done) => {
    const spyFn = spyOn(component, 'openDialog').and.callThrough()
    const searchButton = fixture.nativeElement.querySelector('.open_dialog-button')
    searchButton.click()
    expect(spyFn).toHaveBeenCalled()
    done()
  })
  it('call openAuthorDialog fn without articleId', (done) => {
    const spyFn = spyOn(component, 'openAuthorDialog').and.callThrough()
    const searchButton = fixture.nativeElement.querySelector('.header_seccion-author')
    searchButton.click()
    expect(spyFn).toHaveBeenCalled()
    done()
  })
})
