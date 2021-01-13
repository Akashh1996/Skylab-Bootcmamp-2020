import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from './list/list.component'
import { ArticleDetailComponent } from './detail/detail.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './profile/login.component'
import { AuthorComponent } from './author/author.component'
import { SaveArticlesComponent } from './save-articles/save-articles.component'

const routes: Routes = [
  { path: '', redirectTo: 'articles/1', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'articles/:numPage', component: ListComponent },
  { path: 'article/:articleId', component: ArticleDetailComponent },
  { path: ':authorName/:authorUid', component: AuthorComponent },
  { path: 'saveArticles', component: SaveArticlesComponent },
  { path: '**', redirectTo: 'articles/1', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
