import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriesComponent } from './accesories/accesories.component';
import { ArticlesNewsComponent } from './articles-news/articles-news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ListComponent } from './list/list.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { SalesComponent } from './sales/sales.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { XboxComponent } from './xbox/xbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:videogameId', component: DetailComponent},
  { path: 'products', component: ListComponent},
  { path: 'calendar', component: CalendarComponent },
  { path: 'articles-news', component: ArticlesNewsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'new-releases', component: NewReleasesComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'playstation', component: PlaystationComponent },
  { path: 'xbox', component: XboxComponent },
  { path: 'nintendo', component: NintendoComponent },
  { path: 'merchandising', component: MerchandisingComponent },
  { path: 'accesories', component: AccesoriesComponent },
  { path: 'information', component: InformationComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/favourites', component: FavoritesComponent},
  { path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
