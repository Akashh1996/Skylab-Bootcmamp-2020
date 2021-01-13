import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusOptionsComponent } from './versus-options.component';

describe('VersusOptionsComponent', () => {
  let component: VersusOptionsComponent;
  let fixture: ComponentFixture<VersusOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
