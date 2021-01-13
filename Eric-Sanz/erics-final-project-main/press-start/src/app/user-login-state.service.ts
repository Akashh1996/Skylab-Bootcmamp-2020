import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserLoginStateService {
  private loggedStatus: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
  ) {
    this.loggedStatus = new BehaviorSubject<boolean>(false);
    this.getUser() !== null ? this.setValue(true) : this.setValue(false);
   }

   setUser (user: object): void {
     localStorage.setItem('user', JSON.stringify(user))
     this.loggedStatus.next(true)
   }

   getUser() {
     return JSON.parse(localStorage.getItem('user'))
   }

   getValue() : Observable<boolean> {
     return this.loggedStatus.asObservable()
   }

   removeUser(): void {
     localStorage.removeItem('user')
     this.loggedStatus.next(false)
     this.router.navigate(['products'])
   }

   setValue(currentStatus: boolean): void {
     this.loggedStatus.next(currentStatus)
   }
}
