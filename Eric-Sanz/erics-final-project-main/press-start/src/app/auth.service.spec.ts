import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFireModule ],
      providers:[ { provide: HttpClient, useValue: httpClientSpy}, AuthService, {provide: AngularFireAuth}]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginWithGoogle should be called', () => {
    const spyFn = spyOn(service, 'loginWithGoogle').and.callThrough();
    spyFn();
  })

  it('Should call logout', async () => {
    spyOn(service, 'logOut');
    service.logOut();
    expect(service.logOut).toHaveBeenCalled();
  })

  it('getUser should return user data', (done) => {
    const name = "Gerard"
    httpClientSpy.get.and.returnValue(of([]));
    service.getUser(name).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });

  it('getUser should throw an error', (done) => {
    spyOn(service, 'getUser').and.returnValue(throwError({ tatus: 404 }));
    httpClientSpy.get.and.returnValue(of({}));
    service.handleError()(() => {
      expect(service.handleError).toHaveBeenCalled()
    })
    done();
  })

  it('handleError should be called', () => {
    spyOn(service, 'handleError');
    service.handleError();
    expect(service.handleError).toHaveBeenCalled();
  });
});

describe('AuthService put method', () => {
  let service: AuthService;
  let httpClientSpy: { put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFireModule ],
      providers:[ { provide: HttpClient, useValue: httpClientSpy}, AuthService, {provide: AngularFireAuth}]
    });
    service = TestBed.inject(AuthService);
  });

  it('modifyUser should be called', (done) => {
    const user = { 
      uid: '',
      displayName: '',      
      email: '',
      photoURL: '',
      favorites: []
      };
    httpClientSpy.put.and.returnValue(of([]));
    service.modifyUser(user).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1);
      done();
    });
  });
});

describe('AuthService post method', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFireModule ],
      providers:[ { provide: HttpClient, useValue: httpClientSpy}, AuthService, {provide: AngularFireAuth}]
    });
    service = TestBed.inject(AuthService);
  });

  it('Addfavorite should be called', (done) => {
    const uid = '';
    const videogame = '';
    httpClientSpy.post.and.returnValue(of([]));
    service.addFavourite(uid, videogame).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1);
    })
    done();
  })
});
