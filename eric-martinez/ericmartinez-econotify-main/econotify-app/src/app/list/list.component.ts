import { Component, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ArticleService } from '../service/article.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogDetailMobile } from './dialog-detail-modal/dialog-detail.component'
import { DialogAuthorMobile } from './dialog-author-modal/dialog-author.component'
import { Observable } from 'rxjs'
import { AuthorService } from '../service/author.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  get numPage () {
    return this.route.snapshot.paramMap.get('numPage')
  }

   article$: Observable<any> = this.articleService.articles$

   constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private authorService: AuthorService,
    public dialog: MatDialog
   ) {}

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
