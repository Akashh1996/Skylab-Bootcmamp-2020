import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, AuthService],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebaseConfig)]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
