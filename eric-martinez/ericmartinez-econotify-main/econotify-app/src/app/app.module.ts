import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ArticleDetailComponent } from './detail/detail.component'
import { HttpClientModule } from '@angular/common/http'
import { ListComponent } from './list/list.component'
import { HeaderComponent } from './header/header.component'
import { DialogDetailMobile } from './list/dialog-detail-modal/dialog-detail.component'
import { DialogAuthorMobile } from './list/dialog-author-modal/dialog-author.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './profile/login.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { AuthorComponent } from './author/author.component'
import { AuthorsFollowingComponent } from './profile/authors-following/authors-following.component'
import { LastReadArticlesComponent } from './profile/papers/last-read-articles.component';
import { SaveArticlesComponent } from './save-articles/save-articles.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ListComponent,
    HeaderComponent,
    DialogDetailMobile,
    HomeComponent,
    LoginComponent,
    AuthorComponent,
    DialogAuthorMobile,
    AuthorsFollowingComponent,
    LastReadArticlesComponent,
    SaveArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
