import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Article } from '../models/article.model'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    private articleUrl = 'http://localhost:5000/articles';
    private articlesUrl = 'http://localhost:5000/articles/list';
    private searchArticlesUrl = 'http://localhost:5000/articles/list/search';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    articles$ = new BehaviorSubject(null)

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

    getArticle (articleId: string): Observable<Article> {
      const urlArticle = `${this.articleUrl}/${articleId}`
      return this.http.get<Article>(urlArticle)
        .pipe(
          tap(),
          catchError(this.handleError('getArticle', {})
          )
        )
    }

    getArticles (numPage: string): Observable<Article> {
      const urlArticles = `${this.articlesUrl}/${numPage}`
      return this.http.get(urlArticles)
        .pipe(
          tap(),
          tap((articles) => this.articles$.next(articles)),
          catchError(this.handleError('getArticles', {})
          )
        )
    }

    searchArticle (term: string): Observable<Article> {
      const urlArticles = `${this.searchArticlesUrl}/${term}`
      return this.http.get(urlArticles)
        .pipe(
          tap(),
          tap((articles) => this.articles$.next(articles)),
          catchError(this.handleError('getSearchArticles', {})
          )
        )
    }
}
