import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { PetListComponent } from '../pet-list/pet-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, PetListComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{ path: 'list', component: PetListComponent }])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title pet-refuge', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.name__header').textContent).toContain('PetRefuge');
  });

  it('should sideNavClick function be called', (done) => {
    spyOn(component, 'sideNavClick');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const burguer = compiled.querySelector('.burguerButton');
    const sideNav = compiled.querySelector('.side__nav');
    burguer.click();
    expect(sideNav.style.display).toBe('block');
    done();
  });

  it('should sideNavClick function be called', (done) => {
    spyOn(component, 'sideNavClick');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const burguer = compiled.querySelector('.burguerButton');
    const sideNav = compiled.querySelector('.side__nav');
    sideNav.style.display = 'block';
    burguer.click();
    expect(sideNav.style.display).toBe('none');
    done();
  });

  it('should call get findPet on click find button', async (done) => {
    const spyFn = spyOn(component, 'findPet').and.callThrough();
    const compiled = fixture.nativeElement;
    const navButton = compiled.querySelector('.nav__desktop');
    navButton.click();
    expect(spyFn).toHaveBeenCalled();
    done();
  });

  it('should call get findPets on click find a cat button', async (done) => {
    const spyFn = spyOn(component, 'findPets').and.callThrough();
    const compiled = fixture.nativeElement;
    const navButton = compiled.querySelector('.secondary__nav--pets');
    navButton.click();
    expect(spyFn).toHaveBeenCalled();
    done();
  });
});
