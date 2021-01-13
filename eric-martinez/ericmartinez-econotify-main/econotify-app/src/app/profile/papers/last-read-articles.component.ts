import { Component, OnInit } from '@angular/core'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-last-read-articles',
  templateUrl: './last-read-articles.component.html',
  styleUrls: ['./last-read-articles.component.scss']
})
export class LastReadArticlesComponent implements OnInit {
  user = JSON.parse(localStorage.user)
  favArticles$

  constructor (private userservice: UserService) { }

  getFavArticles (): void {
    this.userservice.getFavArticles(this.user.uid)
      .subscribe(articles => {
        this.favArticles$ = articles.results
      })
  }

  ngOnInit (): void {
    this.getFavArticles()
  }
}
