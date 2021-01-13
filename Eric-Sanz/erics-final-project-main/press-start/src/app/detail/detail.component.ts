import { Component } from '@angular/core';
import { Videogame } from '../videogame';
import { ActivatedRoute } from '@angular/router';
import { VideogameService } from '../videogame.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserLoginStateService } from '../user-login-state.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  get videogameId () {
    return this.route.snapshot.paramMap.get('videogameId')!;
  }
  
  videogame$: Observable<Videogame> = this.videogameService.getVideogame(this.videogameId);
  user = this.userLoginState.getUser() !== null ? JSON.parse(localStorage.getItem('user')) : null;


  favoriteVideogame: any;
  isFavorite: boolean = false;
  flag: boolean;
  coverIndex:number = 0;

  toggleGeneral: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public videogameService: VideogameService,
    public authService: AuthService,
    public userLoginState: UserLoginStateService,
    public location: Location
  ) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
   }

  handleOnChange(event: any): void {
    switch (event.target.value) {
      case 'PlayStation 4':
        this.coverIndex = 0;
        break;
      case 'Xbox One':
        this.coverIndex = 1;
        break;
      case 'Nintendo Switch':
        this.coverIndex = 2;
        break;
      default:
        this.coverIndex = 0;
        break;
    }
  }

  seeDescription(): any {
    this.toggleGeneral = !this.toggleGeneral;
    const descriptionButton = <HTMLButtonElement>document.getElementById('description-button');
    const descriptionOn = <HTMLDivElement>document.getElementById('see-description');
    const pictureButton = <HTMLButtonElement>document.getElementById('picture-button');
    const picturesOn = <HTMLDivElement>document.getElementById('see-pictures');
    this.toggleGeneral ? descriptionOn.style.display = 'block' : descriptionOn.style.display = 'none';
    this.toggleGeneral ? picturesOn.style.display = 'none' : picturesOn.style.display = 'block';
    this.toggleGeneral ? descriptionButton.style['border-bottom'] = '10px solid #f0aa14' : descriptionButton.style['border-bottom'] = 'none';
    this.toggleGeneral ? pictureButton.style['border-bottom'] = 'none' : pictureButton.style['border-bottom'] = '10px solid #f0aa14';
    this.toggleGeneral = false;
  }

  seePictures(): any {
    this.toggleGeneral = !this.toggleGeneral;
    const picturesOn = <HTMLDivElement>document.getElementById('see-pictures');
    const pictureButton = <HTMLButtonElement>document.getElementById('picture-button');
    const descriptionButton = <HTMLButtonElement>document.getElementById('description-button');
    const descriptionOn = <HTMLDivElement>document.getElementById('see-description');
    this.toggleGeneral ? picturesOn.style.display = 'block' : picturesOn.style.display = 'none';
    this.toggleGeneral ? descriptionOn.style.display = 'none' : descriptionOn.style.display = 'block';
    this.toggleGeneral ? pictureButton.style['border-bottom'] = '10px solid #f0aa14' : pictureButton.style['border-bottom'] = 'none';
    this.toggleGeneral ? descriptionButton.style['border-bottom'] = 'none' : descriptionButton.style['border-bottom'] = '10px solid #f0aa14';
    this.toggleGeneral = false;
  }

  seeComments(): any {
    this.toggleGeneral = !this.toggleGeneral;
    const commentsOn = <HTMLDivElement>document.getElementById('see-comments');
    this.toggleGeneral ? commentsOn.style.display = 'block' : commentsOn.style.display = 'none';
    this.toggleGeneral = false;
  }

  addFavourite(uid: string, videogame: any) {
    if (this.flag) {
      this.isFavorite = !this.isFavorite;
      this.authService.addFavourite(uid, videogame._id).subscribe((value) => console.log(value));
    }
  }

  getBack(): void {
    this.location.back();
  }
}
