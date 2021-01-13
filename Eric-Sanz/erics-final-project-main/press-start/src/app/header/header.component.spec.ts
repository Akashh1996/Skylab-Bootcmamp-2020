import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LeftSidenavComponent } from '../left-sidenav/left-sidenav.component';

const AngularFireMocks = {
  auth: of({uid: '123'})
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, LeftSidenavComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}])],
      providers: [AngularFirestore,{provide: AngularFireAuth, useValue: AngularFireMocks}
    ]
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

  // it('should call the openCloseLeftSidenav function', () => {
  //   spyOn(component, 'openCloseLeftSidenav');
  //   const fixture = TestBed.createComponent(LeftSidenavComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   const openCloseButton = compiled.getElementById('toogleLeftSideNav')
  //   openCloseButton.click();
  //   expect(openCloseButton.style.transform).toBe('translateX(400px)')
  // });
});
