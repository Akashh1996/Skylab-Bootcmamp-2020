import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor (private petService: PetService) { }

  ngOnInit (): void {
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
