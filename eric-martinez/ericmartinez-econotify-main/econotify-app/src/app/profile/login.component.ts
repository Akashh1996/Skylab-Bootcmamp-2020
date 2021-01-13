import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserLoginStateService } from '../service/user-login-state.service'

import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public activeAuthors: boolean;
  public activePapers: boolean;

  constructor (
    public auth: AngularFireAuth,
    private _router: Router,
    private userLoginStateService: UserLoginStateService
  ) {}

  ngOnInit () {
    this.auth.user.subscribe()
    this.activeAuthors = true
    this.activePapers = false
  }

  changeActive (active: string) {
    if (active === 'Authors') {
      this.activeAuthors = true
      this.activePapers = false
      const selectedElementAuthors = document.querySelector('.nav_profile-component-authors')
      const selectedElementPapers = document.querySelector('.nav_profile-component-papers')

      selectedElementAuthors.classList.add('nav_profile-component-selected')
      selectedElementPapers.classList.remove('nav_profile-component-selected')
    }
    if (active === 'Articles') {
      this.activePapers = true
      this.activeAuthors = false
      const selectedElementPapers = document.querySelector('.nav_profile-component-papers')
      const selectedElementAuthors = document.querySelector('.nav_profile-component-authors')

      selectedElementPapers.classList.add('nav_profile-component-selected')
      selectedElementAuthors.classList.remove('nav_profile-component-selected')
    }
  }

  signOut () {
    this.auth.signOut()
    this.userLoginStateService.removeUser()
    this._router.navigate(['/articles/1'])
  }
}
