import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusCustomInsertWeaponComponent } from './versus-custom-insert-weapon.component';

describe('VersusCustomInsertWeaponComponent', () => {
  let component: VersusCustomInsertWeaponComponent;
  let fixture: ComponentFixture<VersusCustomInsertWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusCustomInsertWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusCustomInsertWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
