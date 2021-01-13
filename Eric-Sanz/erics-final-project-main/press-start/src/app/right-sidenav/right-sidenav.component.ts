import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { userCategories } from './user-categories';
import { UserLoginStateService } from '../user-login-state.service';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {

  userCategories = userCategories;

  constructor(
    public authService: AuthService,
    public auth: AngularFireAuth,
    public loginstate: UserLoginStateService,
    private router: Router) { }

  async login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logOut();
    this.loginstate.removeUser();
  }

  @Input() public fieldTextType: boolean = false;
  @Input() public toggleSidenav: boolean = false;

  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
    const seePassword = <HTMLDivElement>document.getElementById('eye');
    const noSeePassword = <HTMLDivElement>document.getElementById('eye-slash');

    this.fieldTextType ? noSeePassword.style.display = 'block' : noSeePassword.style.display = 'none';
    this.fieldTextType ? seePassword.style.display = 'none' : seePassword.style.display = 'block';
  }

  toggleRightSidenav(): any {
    this.toggleSidenav = !this.toggleSidenav;
    const openRightSidenav = <HTMLDivElement>document.getElementById('toogleRightSideNav');

    this.toggleSidenav ? openRightSidenav.style.transform = 'translateX(-400px)' : openRightSidenav.style.transform = 'translateX(0px)';
  }

  ngOnInit(): void {
  }

}
