import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthorService } from '../service/author.service'
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author$: any;
  authorName: string;
  isFollowed: any = false;
  user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
  flag: boolean

  constructor (
    private userService: UserService,
    private route: ActivatedRoute,
    private authorService: AuthorService,
    public location: Location
  ) {}

  getAuthor (): void {
    const authorId = this.route.snapshot.paramMap.get('authorUid')

    this.authorService.getAuthor(authorId)
      .subscribe(author => {
        this.author$ = author
      })
  }

  goBack (): void {
    this.location.back()
  }

  setIsFollowed (isFollowed: boolean) {
    this.isFollowed = isFollowed
  }

  ngOnInit (): void {
    this.authorName = this.route.snapshot.paramMap.get('authorName')
    this.getAuthor()
    if (this.user !== null) {
      this.ifFollowsAuthor(this.authorName)
      this.flag = false
    } else {
      this.flag = true
    }
  }

  followAuthor (authorName: string) {
    if (this.user !== null) {
      this.isFollowed = !this.isFollowed
      this.userService.followAuthor(this.user.uid, authorName).subscribe(this.setIsFollowed)
    }
  }

  ifFollowsAuthor (authorName: string) {
    return this.userService.askIfFollowAuthor(this.user.uid, authorName).subscribe((value) => {
      this.isFollowed = value
    })
  }
}
