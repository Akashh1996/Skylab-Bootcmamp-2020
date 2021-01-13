import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), MatDialogModule],
      declarations: [FormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openDialog', () => {
    const spyFn = spyOn(component, 'openDialog').and.callThrough();
    const compiled = fixture.nativeElement;
    const addButton = compiled.querySelector('.Add_button');
    addButton.click();
    expect(spyFn).toHaveBeenCalled();
  });

  it('should call openDialog', () => {
    const spyFn = spyOn(component, 'openDialog').and.callThrough();
    const compiled = fixture.nativeElement;
    component.filePath = 'path';
    component.petName.patchValue('name');
    component.petPhoto.patchValue('path\\fake\\photo');
    component.petDescription.patchValue('description');

    const addButton = compiled.querySelector('.Add_button');
    addButton.click();
    expect(spyFn).toHaveBeenCalled();
  });

  it('should call openDialog', () => {
    const spyFn = spyOn(component, 'openDialog');
    const compiled = fixture.nativeElement;
    component.petName.patchValue({
      petName: null
    });
    component.petPhoto.patchValue({
      petPhoto: null
    });
    component.petDescription.patchValue({
      petDescription: null
    });

    const addButton = compiled.querySelector('.Add_button');
    addButton.click();
    expect(spyFn).toHaveBeenCalled();
  });
});
