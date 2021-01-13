import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Author } from '../models/author.model'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorUrl = 'http://localhost:5000/authors'
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

  getAuthor (authorId: string): Observable<Author> {
    const urlAuthor = `${this.authorUrl}/${authorId}`
    return this.http.get<Author>(urlAuthor)
      .pipe(
        tap(),
        catchError(this.handleError('getArticle', {})
        )
      )
  }
}
