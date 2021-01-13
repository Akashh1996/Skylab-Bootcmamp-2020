import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormModalComponent {
  constructor (public dialogRef: MatDialogRef<FormModalComponent>) { }

  closeDialog (): void {
    this.dialogRef.close();
  }
}
