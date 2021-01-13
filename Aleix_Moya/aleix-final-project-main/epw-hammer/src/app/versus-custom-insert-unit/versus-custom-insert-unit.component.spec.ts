import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusCustomInsertUnitComponent } from './versus-custom-insert-unit.component';

describe('VersusCustomInsertUnitComponent', () => {
  let component: VersusCustomInsertUnitComponent;
  let fixture: ComponentFixture<VersusCustomInsertUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusCustomInsertUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusCustomInsertUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
