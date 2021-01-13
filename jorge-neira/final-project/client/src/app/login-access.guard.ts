import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { UserLoginStateService } from './services/user-login-state.service'

@Injectable({
  providedIn: 'root'
})
export class LoginAccessGuard implements CanActivate {
 private flag: boolean

 constructor (
    private router: Router,
    private userLoginState: UserLoginStateService
 ) {}

 canActivate (
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   this.userLoginState.getValue().subscribe((value) => {
     this.flag = value
   })
   if (this.flag) {
     this.router.navigate(['profile'])
     return false
   } else {
     return true
   }
 }
}
