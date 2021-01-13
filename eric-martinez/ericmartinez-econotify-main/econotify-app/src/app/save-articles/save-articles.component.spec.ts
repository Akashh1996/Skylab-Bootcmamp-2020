import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RouterModule } from '@angular/router'
import { SaveArticlesComponent } from './save-articles.component'
import { AuthorService } from '../service/author.service'
import { ArticleService } from '../service/article.service'

describe('SaveArticlesComponent', () => {
  let component: SaveArticlesComponent
  let fixture: ComponentFixture<SaveArticlesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule],
      declarations: [SaveArticlesComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: AuthorService, useValue: { getAuthor: () => {} } },
        { provide: ArticleService, useValue: { getArticle: () => {} } },
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveArticlesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call openDialog fn', () => {
    const spyFn = spyOn(component, 'openDialog')
    component.openDialog('hola')
    expect(spyFn).toHaveBeenCalled()
  })
})
