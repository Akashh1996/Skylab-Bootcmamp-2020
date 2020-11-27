import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { FormsModule } from '@angular/forms';
import { HeroeComponent } from './heroe/heroe.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
