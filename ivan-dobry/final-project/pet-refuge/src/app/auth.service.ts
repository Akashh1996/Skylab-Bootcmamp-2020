import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl = 'http://localhost:1970/user'

  fireUser: any
  user$ = new Subject<User>()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (public http: HttpClient, public auth: AngularFireAuth, private router: Router) { }

  async login () {
    this.fireUser = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.modifyUser(this.fireUser.user).subscribe();
  }

  logout () {
    this.auth.signOut();
    if (this.router.url === '/user') {
      this.router.navigate(['app-main']);
    }
  }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

  getUser (name: string): Observable<User> {
    const url = `${this.userUrl}/?displayName=${name}`;

    return this.http.get<User>(url)
      .pipe(
        tap(),
        catchError(this.handleError(`getUser name=${name}`, []))
      );
  }

  modifyUser (user: User | any): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.put<User>(url, user)
      .pipe(
        tap(),
        catchError(this.handleError(`getUser name=${name}`, []))
      );
  }

  addFavourite (uid: string, pet: string): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.post<User>(url, { uid, pet })
      .pipe(
        tap(),
        catchError(this.handleError('error adding favorite', []))
      );
  }

  setUser (user: Subject<User>) {
    this.user$ = user;
  }
}
