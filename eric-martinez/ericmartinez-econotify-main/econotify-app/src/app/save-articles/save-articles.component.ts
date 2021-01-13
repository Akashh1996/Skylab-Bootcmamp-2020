import { Component, OnInit } from '@angular/core'
import { UserService } from '../service/user.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogDetailMobile } from '../list/dialog-detail-modal/dialog-detail.component'
import { DialogAuthorMobile } from '../list/dialog-author-modal/dialog-author.component'
import { AuthorService } from '../service/author.service'
import { ArticleService } from '../service/article.service'

@Component({
  selector: 'app-save-articles',
  templateUrl: './save-articles.component.html',
  styleUrls: ['./save-articles.component.scss']
})
export class SaveArticlesComponent implements OnInit {
  user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
  favArticles$: any

  constructor (
    private userservice: UserService,
    private authorService: AuthorService,
    public dialog: MatDialog,
    private articleService: ArticleService
  ) { }

  openDialog (articleId): void {
    if (!articleId) {
      return
    }
    this.dialog.open(DialogDetailMobile, {
      width: '100vw',
      height: '100hw',
      data: { modalArticle: this.articleService.getArticle(articleId) }
    })
      .afterClosed().subscribe(data => {
        if (!data.isSave) {
          const deleteArticle = this.favArticles$.filter(article => article.id !== data.article.id)
          this.favArticles$ = deleteArticle
        }
      })
  }

  openAuthorDialog (author): void {
    if (!author) {
      return
    }
    this.dialog.open(DialogAuthorMobile, {
      width: '100vw',
      height: '100hw',
      data: {
        authorName: author.name,
        modalAuthor: this.authorService.getAuthor(author.uid)
      }
    })
  }

  getFavArticles (): void {
    this.userservice.getFavArticles(this.user.uid)
      .subscribe(articles => {
        this.favArticles$ = articles.results
      })
  }

  ngOnInit (): void {
    if (this.user !== null) {
      this.getFavArticles()
    }
  }
}
