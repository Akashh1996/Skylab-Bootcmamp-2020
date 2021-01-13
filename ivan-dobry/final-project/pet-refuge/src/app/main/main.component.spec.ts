import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { PetListComponent } from '../pet-list/pet-list.component';
import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{ path: 'list', component: PetListComponent }])],
      declarations: [MainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get findPet on click find button', async (done) => {
    const spyFn = spyOn(component, 'findPet').and.callThrough();
    const compiled = fixture.nativeElement;
    const mainButton = compiled.querySelector('.first__button');
    mainButton.click();
    expect(spyFn).toHaveBeenCalled();
    done();
  });

  it('should call get findPets on click find button', async (done) => {
    const spyFn = spyOn(component, 'findPets').and.callThrough();
    const compiled = fixture.nativeElement;
    const mainButton = compiled.querySelector('.second__button');
    mainButton.click();
    expect(spyFn).toHaveBeenCalled();
    done();
  });
});
