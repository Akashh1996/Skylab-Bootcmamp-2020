import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { catchError, map, tap } from 'rxjs/operators'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:5000/api/heroes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (
    private http: HttpClient,
    private message: MessageService
  ) {}

  log (message: string) {
    this.message.add(message)
  }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      this.log(error)

      this.log(`${operation} failed: ${error.message}`)

      return of(result)
    }
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      )
  }

  getHeroNo404 (id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`

    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]),
        tap(hero => {
          const outcome = hero ? 'fetched' : 'did not find'
          this.log(`${outcome} hero id=${id}`)
        }),
        catchError(this.handleError(`getHero id=${id}`))
      )
  }

  getHero (id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`

    return this.http.get<Hero>(url)
      .pipe(
        tap(() => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError(`getHero id=${id}`))
      )
  }

  searchHeroes (term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([])
    }

    const url = `${this.heroesUrl}/?name=${term}`

    return this.http.get<Hero[]>(url)
      .pipe(
        tap((heroes) => {
          heroes.length
            ? this.log(`found heroes matching ${term}`)
            : this.log(`no heroes matching ${term}`)
        }),
        catchError(this.handleError('searchHeroes', []))
      )
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero with id=${newHero.id}`)),
        catchError(this.handleError('addHero'))
      )
  }

  deleteHero ({ id }): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(() => this.log(`delete hero with id=${id}`)),
        catchError(this.handleError('deleteHero'))
      )
  }

  updateHero (hero: Hero): Observable<Hero> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(() => this.log(`updated hero with id=${hero.id}`)),
        catchError(this.handleError('updateHero'))
      )
  }
}
