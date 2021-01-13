import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorModalComponent {
  constructor (public dialogRef: MatDialogRef<ErrorModalComponent>) { }

  closeDialog (): void {
    this.dialogRef.close();
  }
}
