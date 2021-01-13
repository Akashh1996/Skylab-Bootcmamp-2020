import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusChooseComponent } from './versus-choose.component';

describe('VersusChooseComponent', () => {
  let component: VersusChooseComponent;
  let fixture: ComponentFixture<VersusChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
