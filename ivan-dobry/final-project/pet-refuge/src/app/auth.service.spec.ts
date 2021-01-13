import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserComponent } from './user/user.component';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule, RouterTestingModule, RouterTestingModule.withRoutes([{ path: 'user', component: UserComponent }]),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, AngularFireModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }, AuthService, { provide: AngularFireAuth }]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should be called', async () => {
    const spyFn = spyOn(service, 'login').and.callThrough();
    spyFn();
    expect(spyFn).toHaveBeenCalled();
  });

  it('handle error should be called', () => {
    spyOn(service, 'handleError');
    service.handleError();
    expect(service.handleError).toHaveBeenCalled();
  });

  it('getUser should throw error', (done) => {
    spyOn(service, 'getUser').and.returnValue(throwError({ status: 404 }));
    httpClientSpy.get.and.returnValue(of({}));
    service.handleError()(() => {
      expect(service.handleError).toHaveBeenCalled();
    });
    done();
  });

  it('getUser should be called', (done) => {
    const id = 'asduhasudgha';
    httpClientSpy.get.and.returnValue(of([]));
    service.getUser(id).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });
});

describe('AuthService put method', () => {
  let service: AuthService;
  let httpClientSpy: { put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, AngularFireModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }, AuthService, { provide: AngularFireAuth }]
    });
    service = TestBed.inject(AuthService);
  });

  it('modifyUser should be called', (done) => {
    const user = {
      uid: '',
      email: '',
      photoURL: '',
      displayName: '',
      favourite: [{
        type: '',
        name: '',
        description: '',
        age: '',
        photo: ''
      }]
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
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, AngularFireModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }, AuthService, { provide: AngularFireAuth }]
    });
    service = TestBed.inject(AuthService);
  });

  it('addFavourite should be called', (done) => {
    const uid = '';
    const pet = '';
    httpClientSpy.post.and.returnValue(of([]));
    service.addFavourite(uid, pet).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1);
      done();
    });
  });
});
