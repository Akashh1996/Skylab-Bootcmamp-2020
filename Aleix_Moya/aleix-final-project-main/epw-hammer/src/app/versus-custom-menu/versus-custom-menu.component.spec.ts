import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusCustomMenuComponent } from './versus-custom-menu.component';

describe('VersusCustomMenuComponent', () => {
  let component: VersusCustomMenuComponent;
  let fixture: ComponentFixture<VersusCustomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusCustomMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusCustomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
