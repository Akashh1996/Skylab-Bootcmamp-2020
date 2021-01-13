import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [HttpClient, AuthService, {provide: AngularFireAuth}],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFireModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call description function', () => {
    component.seeDescription();
  });

  it('Should call seepictures function', () => {
    component.seePictures();
  });

  it('should call seecomments and getback functions', () => {
    component.getBack();
    component.seeComments();
  });

  it('should call seecomments function toggle false', () => {
    component.toggleGeneral = false;
    component.seeComments();
  });

  it('should call handleonChange function', () => {
    component.handleOnChange(event);
  })

  it('should call addfavourite function', () => {
    const uid: string = '';
    const videogame: any = [{}]
    component.addFavourite(uid, videogame);
  })
});
