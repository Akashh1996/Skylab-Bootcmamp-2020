import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public auth: AngularFireAuth, private router: Router, public authService: AuthService) {
  }

  async login () {
    this.authService.login();
  }

  logout () {
    this.authService.logout();
  }
}
