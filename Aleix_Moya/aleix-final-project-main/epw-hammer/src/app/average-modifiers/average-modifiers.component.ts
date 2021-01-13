/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Modifiers } from '../DataModifiers';
import { EpwhammerService } from '../epwhammer.service';

@Component({
  selector: 'app-average-modifiers',
  templateUrl: './average-modifiers.component.html',
  styleUrls: ['./average-modifiers.component.css'],
})
export class AverageModifiersComponent implements OnInit {
  actualModifiers: Modifiers | any;

  rerollList: string[] = ['none', '1s', 'All Failed', '6s', 'All Successful'];

  damageRerrollList: string[] = ['Reroll Favorable', 'Reroll Disfavorable', 'none'];

  selectedValue = this.epwhammerService.modifiers;

  save() {
    this.epwhammerService.setModifiers(this.actualModifiers);
  }

  resetModifiers() {
    const originalModifiers:Modifiers = {
      Hit: 0,
      Wound: 0,
      Save: 0,
      FnP: 7,
      Damage: 0,
      ModAp: 0,
      SInV: 7,
      rerollHits: 'none',
      rerollWounds: 'none',
      rerollSaved: 'none',
      rerollDamage: 'none',
    };
    this.epwhammerService.setModifiers(originalModifiers);
    this.actualModifiers = originalModifiers;
  }

  actionFunction() {
    alert('Saved Modifiers.');
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  constructor(public epwhammerService: EpwhammerService, public dialogRef: MatDialogRef<AverageModifiersComponent>) { }

  ngOnInit(): void {
    this.actualModifiers = this.epwhammerService.modifiers;
  }
}
