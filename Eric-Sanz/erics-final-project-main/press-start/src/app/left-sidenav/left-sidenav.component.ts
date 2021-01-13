import { Component, Input } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  categories = categories;

  @Input() public toggleLeftSidenav: boolean = false;

  openCloseLeftSidenav(): any {
    this.toggleLeftSidenav = !this.toggleLeftSidenav
    const openCloseButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    this.toggleLeftSidenav ? openCloseButton.style.transform = 'translateX(400px)' : openCloseButton.style.transform = 'translateX(0px)';  
  }

  closeLeftSidenav(): any {
    this.toggleLeftSidenav = !this.toggleLeftSidenav
    const closeButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    closeButton.style.transform = 'translateX(0px)';
  }
}
