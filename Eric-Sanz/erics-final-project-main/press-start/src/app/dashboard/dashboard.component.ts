import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserLoginStateService } from '../user-login-state.service';
import { VideogameService } from '../videogame.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { userCategories } from '../right-sidenav/user-categories';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userCategories = userCategories;

  flag: boolean;

  user = this.userLoginState.getUser() !== null ? JSON.parse(localStorage.getItem('user')) : null;
  user$: Observable<User> = this.authService.getUser(this.authService.fireUser.user.displayName);

  constructor(
    public route: ActivatedRoute,
    public videogameService: VideogameService,
    public authService: AuthService,
    public userLoginState: UserLoginStateService,
  ) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
   }


  ngOnInit(): void {}

}
