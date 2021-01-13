import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PetService } from '../pet.service';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  petTypes: string[] = ['Cat', 'Dog']
  petAges: string[] = ['Young', 'Adult', 'Senior']
  filePath = 'C:\\Users\\ivand\\Desktop\\Skylab\\PetRefuge src';

  petName = new FormControl(null)
  petPhoto: any = new FormControl(null)
  petDescription = new FormControl(null)
  petType: string = this.petTypes[0]
  petAge: string = this.petAges[0]

  constructor (private petService: PetService, public dialog: MatDialog) { }

  openDialog () {
    if (this.petName.value !== null && this.petPhoto.value !== null && this.petDescription.value !== null) {
      const photoName = this.petPhoto.value.split('\\')[2];
      this.petService.addPet({
        type: this.petType,
        name: String(this.petName.value),
        description: String(this.petDescription.value),
        age: this.petAge,
        photo: [`${this.filePath}\\` + `${photoName}`]
      }).subscribe();
      this.petName.reset();
      this.petPhoto.reset();
      this.petDescription.reset();
      this.dialog.open(FormModalComponent);
    } else {
      this.dialog.open(ErrorModalComponent);
    }
  }
}
