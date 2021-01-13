import { Component } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  categories = categories;

  openLeftSidenav(): any {
    const openButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    openButton.style.transform = 'translateX(400px)';
  }

  closeLeftSidenav(): any {
    const closeButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    closeButton.style.transform = 'translateX(0px)';
  }
}
