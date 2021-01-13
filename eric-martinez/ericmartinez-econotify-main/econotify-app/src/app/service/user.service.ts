import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private urlFavAuthorUrl = 'http://localhost:5000/favAuthor';
    private urlUser = 'http://localhost:5000/user';
    private urlSaveArticle = 'http://localhost:5000/readArticles';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    user$ = new BehaviorSubject(null)

    constructor (
        private http: HttpClient
    ) {}

    handleError (operation = 'operation', result?: any) {
      return (error: any): Observable<any> => {
        console.log(error)

        console.log(`${operation} failed: ${error.message}`)

        return of(result)
      }
    }

    saveUser (user: User): Observable<User> {
      const url = `${this.urlUser}`
      return this.http.post<User>(url, user)
        .pipe(
          tap(),
          catchError(this.handleError(`getUser name=${name}`, []))
        )
    }

    followAuthor (uid: string, authors: string): Observable<any> {
      const favAuthor = this.urlFavAuthorUrl
      return this.http.put<any>(favAuthor, { uid, authors })
        .pipe(
          tap(),
          catchError(async (error) => console.log(error))
        )
    }

    askIfFollowAuthor (uid: string, authors: string): Observable<any> {
      const favAuthor = this.urlFavAuthorUrl
      return this.http.post<any>(favAuthor, { uid, authors })
        .pipe(
          tap(),
          catchError(this.handleError('followAuthor', {})
          )
        )
    }

    askIfSaveArticle (uid: string, articleId: string): Observable<any> {
      const saveArticle = this.urlSaveArticle
      return this.http.post<any>(saveArticle, { uid, articleId })
        .pipe(
          tap(),
          catchError(this.handleError('unsave Article', {})
          )
        )
    }

    saveReadArticle (uid: string, articleId: string): Observable<any> {
      const saveArticle = this.urlSaveArticle
      return this.http.put<any>(saveArticle, { uid, articleId })
        .pipe(
          tap(),
          catchError(this.handleError('followAuthor', {})
          )
        )
    }

    getFavArticles (uid: string): any {
      const favArticles = this.urlSaveArticle
      return this.http.get<any>(`${favArticles}/${uid}`)
        .pipe(
          tap(),
          catchError(this.handleError('error to get favArticles', {})
          )
        )
    }

    getFavAuthors (uid: string): any {
      const favAuthors = this.urlFavAuthorUrl
      return this.http.get<any>(`${favAuthors}/${uid}`)
        .pipe(
          tap(),
          catchError(this.handleError('error to get favourite authors', {}))
        )
    }
}
