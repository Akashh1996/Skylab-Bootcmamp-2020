import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxComponent } from './xbox.component';

describe('XboxComponent', () => {
  let component: XboxComponent;
  let fixture: ComponentFixture<XboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
