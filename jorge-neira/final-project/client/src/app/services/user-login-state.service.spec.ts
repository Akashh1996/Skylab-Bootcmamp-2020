import { TestBed } from '@angular/core/testing'

import { UserLoginStateService } from './user-login-state.service'

describe('UserLoginStateService', () => {
  let service: UserLoginStateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserLoginStateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
