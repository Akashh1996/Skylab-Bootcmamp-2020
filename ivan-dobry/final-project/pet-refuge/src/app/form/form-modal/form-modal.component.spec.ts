import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { RouterTestingModule } from '@angular/router/testing';
// import { UserComponent } from '../../user/user.component';

import { FormModalComponent } from './form-modal.component';

describe('FormModalComponent', () => {
  let component: FormModalComponent;
  let fixture: ComponentFixture<FormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), MatDialogModule],
      declarations: [FormModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeDialog', () => {
    const spyFn = spyOn(component, 'closeDialog').and.callThrough();
    const compiled = fixture.nativeElement;
    const closeButton = compiled.querySelector('.close__modal');
    closeButton.click();
    expect(spyFn).toHaveBeenCalled();
  });
});
