import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes$: Observable<Hero[]> = this.heroService.getHeroes()
    .pipe(
      map(heroes => heroes.slice(1, 5))
    );

  constructor (private heroService: HeroService) { }
}
