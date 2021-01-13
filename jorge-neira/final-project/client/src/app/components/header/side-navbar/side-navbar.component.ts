import { Component } from '@angular/core'

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  panelOpenState = false;

  categories: any[] = [
    {
      category: 'portátiles',
      route: 'laptop',
      icon: 'laptop_chromebook',
      categoriesExpand: [
        { name: 'portatiles', subRoute: '' },
        { name: 'gaming', subRoute: 'gaming' },
        { name: 'workstation', subRoute: 'workstation' }
      ]
    },
    {
      category: 'periféricos',
      route: 'peripheral',
      icon: 'mouse',
      categoriesExpand: [
        { name: 'teclados', subRoute: 'keyboard' },
        { name: 'ratones', subRoute: 'mouse' },
        { name: 'monitores', subRoute: 'monitor' },
        { name: 'Periféricos', subRoute: '' }
      ]
    },
    {
      category: 'smartphones',
      route: 'smartphone',
      icon: 'smartphone',
      categoriesExpand: [
        { name: 'smartphone', subRoute: 'smartphone' }
      ]
    }
  ];

  onTop ():void {
    window.scrollTo(0, 0)
  }

  closeSidebar (): void {
    const closeBtn = document.getElementById('toogleSideBar')
    closeBtn.style.transform = 'translateX(-350px)'
  }

  openSidebar (): void {
    const openBtn = document.getElementById('toogleSideBar')
    openBtn.style.transform = 'translateX(0)'
  }
}
