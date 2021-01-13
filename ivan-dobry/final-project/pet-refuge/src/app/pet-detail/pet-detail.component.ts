import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet';
import { User } from '../user.model';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  get petId () {
    return this.route.snapshot.paramMap.get('id')!;
  }

  pet$: Observable<Pet> = this.petService.getPet(this.petId)
  user$: Observable<User> = this.authService.getUser(this.authService.fireUser.user.displayName);

  favPet: any;
  user: any;
  following: boolean = false

  addFavourite () {
    this.following = !this.following;
    this.authService.addFavourite(this.user.uid, this.favPet._id).subscribe();
  }

  ngOnInit () {
    this.pet$.subscribe(val => {
      this.favPet = val;
      this.user$.subscribe(element => {
        this.user = element;
        if (this.user) {
          this.checkIfFav();
        }
      });
    });
  }

  checkIfFav () {
    if (this.user.favourite.find((element: any) => element._id === this.favPet._id)) {
      this.following = true;
    }
  }

  setUser (user: Observable<User>) {
    this.user$ = user;
  }

  constructor (
    public petService: PetService,
    public authService: AuthService,
    public route: ActivatedRoute
  ) { }
}
