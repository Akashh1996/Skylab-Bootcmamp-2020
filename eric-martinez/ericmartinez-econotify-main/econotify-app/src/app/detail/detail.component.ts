import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Article } from '../models/article.model'
import { ArticleService } from '../service/article.service'
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  isSave: any = false;
  user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
  check: boolean = true;

  constructor (
    private route: ActivatedRoute,
    private userService: UserService,
    private articleService: ArticleService,
    public location: Location
  ) {}

  getArticle (): void {
    const articleId = this.route.snapshot.paramMap.get('articleId')

    this.articleService.getArticle(articleId)
      .subscribe(article => {
        this.article = article
      })
  }

  goBack (): void {
    this.location.back()
  }

  ngOnInit (): void {
    this.getArticle()
  }

  setIsSave (isSave: boolean) {
    this.isSave = isSave
  }

  readArticle (articleId: string): void {
    if (this.user !== null) {
      this.isSave = !this.isSave
      this.userService.saveReadArticle(this.user.uid, articleId).subscribe(this.setIsSave)
    } else return null
  }

  ifSaveArticle (articleId: string) {
    if (this.user !== null) {
      if (this.check) {
        return this.userService.askIfSaveArticle(this.user.uid, articleId).subscribe((value) => {
          this.isSave = value
          this.check = false
        })
      } else return null
    } else return null
  }
}
