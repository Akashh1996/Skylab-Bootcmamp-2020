import { TestBed } from '@angular/core/testing';

import { LoginAccessGuard } from './login-access.guard';

describe('LoginAccessGuard', () => {
  let guard: LoginAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
