import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'

export interface localUser {
 time: number;
 id: string
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService {
   private loggedStatus: BehaviorSubject<boolean>;
   private localUser: BehaviorSubject<localUser> | null
   private nonState: any
   constructor (
     private router: Router
   ) {
     this.loggedStatus = new BehaviorSubject<boolean>(false)
     this.localUser = new BehaviorSubject<localUser>(null)
     this.nonState = this.getUser() !== null ? (this.setValue(true), this.setLocalUser(this.getUser())) : (this.setValue(false), this.setLocalUser(null))
   }

   setUser (id: string): void {
     const session = { time: Date.now(), id }
     localStorage.setItem('nbSession', JSON.stringify(session))
     this.loggedStatus.next(true)
   }

   getUser () {
     return JSON.parse(localStorage.getItem('nbSession'))
   }

   getValue (): Observable<boolean> {
     return this.loggedStatus.asObservable()
   }

   getLocalUser (): Observable<localUser> | null {
     return this.localUser.asObservable()
   }

   removeUser (): void {
     localStorage.removeItem('nbSession')
     this.loggedStatus.next(false)
     this.router.navigate(['login'])
   }

   setValue (currentStatus: boolean): void {
     this.loggedStatus.next(currentStatus)
   }

   setLocalUser (currentUser: localUser | null): void {
     this.localUser.next(currentUser)
   }
}
