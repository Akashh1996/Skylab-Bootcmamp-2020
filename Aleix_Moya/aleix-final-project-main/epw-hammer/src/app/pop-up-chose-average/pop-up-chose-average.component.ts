/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-pop-up-chose-average',
  templateUrl: './pop-up-chose-average.component.html',
  styleUrls: ['./pop-up-chose-average.component.css'],
})
export class PopUpChoseAverageComponent {
  constructor(public issueService: IssueService, public dialogRef: MatDialogRef<PopUpChoseAverageComponent>) { }

  factionList: string[] = ['Astartes', 'Harlequins', 'Necrons']

  public chosenFaction: string = this.factionList[0];

  factions: string = this.factionList[0];

  actionFunction() {
    this.issueService.setSelectedFaction(this.factions);
    this.closeModal();
  }

  setDropDownValue() {
    this.chosenFaction = this.factions;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
