import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    IvyCarouselModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
