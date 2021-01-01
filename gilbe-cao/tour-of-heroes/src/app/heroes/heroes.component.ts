import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes$: Observable<Hero[]> = this.heroService.getHeroes();

  constructor (private heroService: HeroService) { }
}
