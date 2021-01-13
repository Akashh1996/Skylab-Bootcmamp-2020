import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { PetService } from '../pet.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user$: Observable<User> = this.authService.getUser(this.authService.fireUser.user.displayName)

  constructor (public authService: AuthService, public petService: PetService) { }
}
