import { Injectable } from '@angular/core';
import { Videogame } from './videogame';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public videogamesUrl = 'http://localhost:1728';
  public videogamesListUrl = 'http://localhost:1728/products';
  public searchVideogamesUrl = 'http://localhost:1728/products/search';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  videogames$ = new Subject<Videogame[]>()

  constructor(
    public http: HttpClient
  ) { }

  handleError (operation= 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

  getVideogames(): Observable<Videogame[]> {
    const url = `${this.videogamesListUrl}`;
    return this.http.get<Videogame[]>(url)
    .pipe(
      tap(() => console.log('fetched videogames')),
      tap((videogames) => this.videogames$.next(videogames)),
      catchError(this.handleError('getVideogames', []))
    );
  }

  getVideogame(videogameId: string): Observable<Videogame> {
    const url = `${this.videogamesUrl}/product/${videogameId}`;
    return this.http.get<Videogame>(url)
    .pipe(
      tap(() => console.log(`fetched videogame id=${videogameId}`)),
      catchError(this.handleError(`getVideogame`, []))
    );
  }

  searchVideogame(term: string): Observable<Videogame> {
    const url = `${this.searchVideogamesUrl}/${term}`
    return this.http.get<Videogame[]>(url)
    .pipe(
      tap(() => console.log('fetched videogames')),
      tap((videogames) => this.videogames$.next(videogames)),
      catchError(this.handleError('getSearchVideogames', {}))
    )
  }
}
