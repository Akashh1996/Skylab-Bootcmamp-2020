import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor (private petService: PetService) {
  }

  pets: Subject<any> = new Subject()

  ngOnInit (): void {

  }

  sideNavClick (): any {
    const sideNavElement = <HTMLDivElement>document.querySelector('.side__nav');
    sideNavElement.style.display === 'block' ? sideNavElement.style.display = 'none' : sideNavElement.style.display = 'block';
  }

  findPets () {
    this.petService.getPets()
      .subscribe();
  }

  findPet (type: string) {
    this.petService.getPetType(type)
      .subscribe();
  }
}
