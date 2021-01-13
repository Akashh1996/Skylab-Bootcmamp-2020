import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/app';
import { catchError, tap } from 'rxjs/operators';
import { UserLoginStateService } from './user-login-state.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private userUrl = 'http://localhost:1728/user';
  
  fireUser: any;
  user$ = new Subject<User>()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  localStorage: any;

  constructor( 
    public http: HttpClient,
    public afAuth: AngularFireAuth,
    private router: Router,
    public loginState: UserLoginStateService, ) {
    this.loginState.setUser(this.user$)
   }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result)
    };
  }

  async loginWithGoogle() {
    this.fireUser = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.loginState.setUser(this.fireUser.user);
    this.modifyUser(this.fireUser.user).subscribe();
    return this.fireUser.user;
  }

  async logOut(){
    await this.afAuth.signOut();
  }

  getUser (name: string): Observable<User> {
    const url = `${this.userUrl}/?displayName=${name}`;
    return this.http.get<User>(url)
    .pipe(
      tap(() => console.log(`fetched user ${name}`)),
      catchError(this.handleError(`getUser name=${name}`, []))
    );
  }

  modifyUser(user: User): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.put<User>(url, user)
    .pipe(
      tap(() => console.log(`created user ${this.fireUser.user.uid}`)),
      catchError(this.handleError(`getUser name=${name}`, []))
    );
  }

  addFavourite(uid: string, videogame: string): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.post<User>(url, {uid, videogame})
    .pipe(
      tap((value) => console.log('added to favorites', value)),
      catchError(this.handleError('error adding favorite', []))
    );
  }

  setUser(user: Subject<User>) {
    this.user$ = user;
  }
}
