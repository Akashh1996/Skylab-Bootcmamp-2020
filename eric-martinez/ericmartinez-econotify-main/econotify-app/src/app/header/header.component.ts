import { Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog'
import { Article } from '../models/article.model'
import { ArticleService } from '../service/article.service'
import { DialogLoginMobile } from './login-user-modal/dialog-login.component'
import { UserLoginStateService } from '../service/user-login-state.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  articles$: Observable<Article>
  public flag: boolean

  isSearchBoxVisible = false
  currentInputState: any
  searchTerms: Subject<any> = new Subject();

  constructor (
    private articleService: ArticleService,
    public dialog: MatDialog,
    private userLoginState: UserLoginStateService
  ) {
    this.userLoginState.getValue().subscribe((value) => {
      this.flag = value
    })
  }

  search (term: string): void {
    term === '' ? this.articleService.getArticles('1').subscribe() : this.searchTerms.next(term)
  }

  openLoginDialog (): void {
    this.dialog.open(DialogLoginMobile, {
      width: '70%',
      height: '60%'
    })
  }

  ngOnInit (): void {
    this.search('')
    this.searchTerms
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(term => this.articleService.searchArticle(term))
      )
      .subscribe()
  }
}
