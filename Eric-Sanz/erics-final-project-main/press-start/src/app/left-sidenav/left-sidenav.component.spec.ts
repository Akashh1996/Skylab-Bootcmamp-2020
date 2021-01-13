import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';

import { LeftSidenavComponent } from './left-sidenav.component';

describe('LeftSidenavComponent', () => {
  let component: LeftSidenavComponent;
  let fixture: ComponentFixture<LeftSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSidenavComponent, HeaderComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the openCloseLeftSidenav and closeLeftSidenav functions', () => {
      component.openCloseLeftSidenav()
      component.closeLeftSidenav()
  });
});
