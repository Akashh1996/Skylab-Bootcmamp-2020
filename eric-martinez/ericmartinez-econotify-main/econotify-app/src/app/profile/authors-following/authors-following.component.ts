import { Component, OnInit } from '@angular/core'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-authors-following',
  templateUrl: './authors-following.component.html',
  styleUrls: ['./authors-following.component.scss']
})
export class AuthorsFollowingComponent implements OnInit {
  user = JSON.parse(localStorage.user)
  favAuthors$

  constructor (private userService: UserService) { }

  getFavArticles (): void {
    this.userService.getFavAuthors(this.user.uid)
      .subscribe(authors => {
        this.favAuthors$ = authors
      })
  }

  followAuthor (authorName: string) {
    this.userService.followAuthor(this.user.uid, authorName).subscribe(() => {
      this.favAuthors$ = this.getFavArticles()
    })
  }

  ngOnInit (): void {
    this.getFavArticles()
  }
}
