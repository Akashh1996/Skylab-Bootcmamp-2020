import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UserLoginStateService } from './user-login-state.service';

describe('UserLoginStateService', () => {
  let service: UserLoginStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]), RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(UserLoginStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
