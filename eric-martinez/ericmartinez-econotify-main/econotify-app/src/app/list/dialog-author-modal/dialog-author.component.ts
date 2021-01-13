import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogDetailMobile } from '../dialog-detail-modal/dialog-detail.component'
import { Observable } from 'rxjs'
import { UserService } from '../../service/user.service'
import { ArticleService } from '../../service/article.service'

 @Component({
   selector: 'dialog-author.component',
   templateUrl: 'dialog-author.component.html',
   styleUrls: ['./dialog-author.component.scss'],
   encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.OnPush
 })
export class DialogAuthorMobile implements OnInit {
  isFollowed: any = false;
  user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
  flag: boolean

  constructor (
    private userService: UserService,
    public dialogRef: MatDialogRef<DialogAuthorMobile>,
    private articleService: ArticleService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {authorName: string, modalAuthor: Observable<any>}
  ) {}

  setIsFollowed (isFollowed: boolean) {
    this.isFollowed = isFollowed
  }

  ngOnInit () {
    if (this.user !== null) {
      this.ifFollowsAuthor(this.data.authorName)
      this.flag = false
    } else {
      this.flag = true
    }
  }

  ngAfterView (): void {
    const authorButton = document.querySelector('.header_container-author')
    this.flag ? (authorButton as HTMLElement).style.height = '10%' : (authorButton as HTMLElement).style.height = '20%'
  }

  getAuthorInitials (fullName: string) {
    const arrName = fullName.split(' ')
    return arrName[0][0] + arrName[1][0]
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

  openDialog (articleId): void {
    if (!articleId) {
      return
    }

    this.dialog.open(DialogDetailMobile, {
      width: '100vw',
      height: '100hw',
      data: { modalArticle: this.articleService.getArticle(articleId) }
    })
  }
}
