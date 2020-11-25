import { Component, OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes!';

  selectedHero: Hero | undefined;

  heroes: Hero[];

  constructor (private heroService: HeroService) {
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }
  }

  ngOnInit() {
    this.getHeroes();
  }
}
