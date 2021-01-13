import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VideogameService } from '../videogame.service';
import { Videogame } from '../videogame';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit{

  videogames$: undefined | Observable<Videogame[]>

  constructor (
    private videogameService: VideogameService
  ) { }

  ngOnInit(): void {
    this.videogames$ = this.videogameService.getVideogames()
  }
}
