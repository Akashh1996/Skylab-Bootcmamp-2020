import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RightSidenavComponent } from './right-sidenav.component';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from '../list/list.component';


describe('RightSidenavComponent', () => {
  let component: RightSidenavComponent;
  let fixture: ComponentFixture<RightSidenavComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSidenavComponent ],
      providers: [HttpClient, AuthService, {provide: AngularFireAuth}],
      imports: [HttpClientTestingModule, RouterModule.forRoot([{path: 'products', component: ListComponent}]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFireModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call functions', () => {
    component.login()
    component.logout()
    component.toggleFieldTextType()
    component.toggleRightSidenav()
  })
});
