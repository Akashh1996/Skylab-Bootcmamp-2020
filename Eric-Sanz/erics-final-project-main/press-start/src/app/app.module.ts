import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlaystation, faXbox, faTwitter, faFacebook, faInstagram, faGoogle, faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { faNewspaper, faSearch, faCalendar, faCalendarAlt, faUsers, faUser, faShippingFast, faWindowClose, faTimes, faTimesCircle, faAddressBook, faComment, faCommentAlt, faComments, faShoppingCart, faMoneyBillWave, faBars, faCaretDown, faCaretRight, faCaretLeft, faCaretUp, faArrowAltCircleLeft, faEnvelope, faEye, faEyeSlash, faBoxes, faCartPlus, faHeart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesNewsComponent } from './articles-news/articles-news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { SalesComponent } from './sales/sales.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FavoritesComponent } from './favorites/favorites.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftSidenavComponent,
    FooterComponent,
    ArticlesNewsComponent,
    CalendarComponent,
    ShoppingCartComponent,
    NewReleasesComponent,
    ComingsoonComponent,
    SalesComponent,
    PlaystationComponent,
    XboxComponent,
    NintendoComponent,
    MerchandisingComponent,
    AccesoriesComponent,
    InformationComponent,
    SearchComponent,
    RightSidenavComponent,
    DetailComponent,
    ListComponent,
    DashboardComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
      library.addIcons(faAddressBook, faCalendar, faCalendarAlt, faCcMastercard, faCcPaypal, faCcVisa, faComment,
        faCommentAlt, faComments, faFacebook, faInstagram, faMoneyBillWave, faNewspaper, faPlaystation, faSearch,
        faShippingFast, faShoppingCart, faHeart, faCartPlus, faBoxes, faTimes, faTimesCircle, faGoogle, faTwitter, faUsers, faWindowClose, faXbox, faCaretUp,
        faCaretRight, faCaretLeft, faCaretDown, faBars, faSignInAlt, faSignOutAlt, faUser, faArrowAltCircleLeft, faEnvelope, faEye, faEyeSlash)
      library.addIconPacks(far)
    }
}
