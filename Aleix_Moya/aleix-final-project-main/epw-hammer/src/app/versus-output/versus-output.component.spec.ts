import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusOutputComponent } from './versus-output.component';

describe('VersusOutputComponent', () => {
  let component: VersusOutputComponent;
  let fixture: ComponentFixture<VersusOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
