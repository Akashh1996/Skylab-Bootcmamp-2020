import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Pet } from './pet';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  public petsUrl = 'http://localhost:1970'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  pets$ = new Subject<Pet[]>()

  constructor (public http: HttpClient) { }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

  getPets (): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
      .pipe(
        tap(),
        tap((pets) => this.pets$.next(pets)),
        catchError(this.handleError('getPets', []))
      );
  }

  getPet (id: string): Observable<Pet> {
    const url = `${this.petsUrl}/detail?id=${id}`;
    return this.http.get<Pet>(url)
      .pipe(
        tap(),
        catchError(this.handleError(`getPet id=${id}`, []))
      );
  }

  getPetType (type: string): Observable<Pet[]> {
    const url = `${this.petsUrl}/type?type=${type}`;

    return this.http.get<Pet[]>(url)
      .pipe(
        tap(),
        tap((pets) => this.pets$.next(pets)),
        catchError(this.handleError('get pet types', [])
        )
      );
  }

  addPet (pet: any): Observable<any> {
    return this.http.put<any>(this.petsUrl, pet)
      .pipe(
        tap(),
        catchError(this.handleError('adding new pet', []))
      );
  }
}
