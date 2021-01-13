import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusModifiersComponent } from './versus-modifiers.component';

describe('VersusModifiersComponent', () => {
  let component: VersusModifiersComponent;
  let fixture: ComponentFixture<VersusModifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusModifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
