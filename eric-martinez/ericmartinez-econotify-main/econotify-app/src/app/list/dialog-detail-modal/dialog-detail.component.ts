import { Component, Inject, ViewEncapsulation } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogAuthorMobile } from '../dialog-author-modal/dialog-author.component'
import { Observable } from 'rxjs'
import { Article } from 'src/app/models/article.model'
import { UserService } from '../../service/user.service'
import { AuthorService } from '../../service/author.service'

 @Component({
   selector: 'dialog-detail.component',
   templateUrl: 'dialog-detail.component.html',
   styleUrls: ['./dialog-detail.component.scss'],
   encapsulation: ViewEncapsulation.None
 })
export class DialogDetailMobile {
  isSave: any = false;
  user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
  check: boolean = true;

  constructor (
    private userService: UserService,
    public dialog: MatDialog,
    private authorService: AuthorService,
    public dialogRef: MatDialogRef<DialogDetailMobile>,
    @Inject(MAT_DIALOG_DATA) public data: {modalArticle: Observable<Article>}
  ) {}

  backClick (data): void {
    this.dialogRef.close(data)
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
}
