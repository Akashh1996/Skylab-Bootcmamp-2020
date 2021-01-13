import { Component, Input, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
import { VideogameService } from '../videogame.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  videogames$: Observable<Videogame>;
  searchTerms: Subject<any> = new Subject();

  constructor(
    public videogameService: VideogameService,
  ) { }

  ngOnInit(): void {
    this.search('')
    this.searchTerms
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.videogameService.searchVideogame(term))
    )
    .subscribe()
  }

  @Input() public toggle: boolean = false;

  search (term: string): void {
    term === '' ? this.videogameService.getVideogames().subscribe() : this.searchTerms.next(term)
  }

  openCloseSearchBar(): any {
    this.toggle = !this.toggle;
    const openSearchBar = <HTMLDivElement>document.getElementById('search-feature');

    this.toggle ? openSearchBar.style.transform = 'translateY(80px)' : openSearchBar.style.transform = 'translateY(0px)';
  }

}
