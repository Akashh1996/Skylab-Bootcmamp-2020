import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusBeginComponent } from './versus-begin.component';

describe('VersusBeginComponent', () => {
  let component: VersusBeginComponent;
  let fixture: ComponentFixture<VersusBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusBeginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
