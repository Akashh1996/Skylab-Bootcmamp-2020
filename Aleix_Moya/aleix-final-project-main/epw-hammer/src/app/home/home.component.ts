/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { Component } from '@angular/core';
import {
  MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Modifiers } from '../DataModifiers';
import { EpwhammerService } from '../epwhammer.service';
import { PopUpChoseAverageComponent } from '../pop-up-chose-average/pop-up-chose-average.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public epwhammerService:EpwhammerService, public matDialog: MatDialog) { }

  initialModifiers: Modifiers = {
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

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'AverageModifiersComponent';
    dialogConfig.height = '460px';
    dialogConfig.width = '700px';
    const modalDialog = this.matDialog.open(PopUpChoseAverageComponent, dialogConfig);
  }

  getInitialModifiers() {
    return this.epwhammerService.modifiers;
  }

  setInitialModifiers() {
    return this.epwhammerService.setModifiers(this.initialModifiers);
  }
}
