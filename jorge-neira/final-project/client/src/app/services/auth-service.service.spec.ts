import { TestBed } from '@angular/core/testing'
import { AuthService } from './auth-service.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthService', () => {
  let authService: AuthService
  let httpMock: HttpTestingController
  let mockService: any
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule],
      providers: [{ provide: authService, useValue: mockService }]
    })
    mockService = jasmine.createSpyObj('loggingService', ['userLogin', 'userRegister', 'validateToken'])
    authService = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(authService).toBeTruthy()
  })
  it('should call userLogin with the given route', () => {
    const user = {
      email: 'test@test.ts',
      password: '123456789'
    }
    authService.userLogin(user)
      .subscribe(
        (value) => {
          expect(mockService.validateToken).toHaveBeenCalledWith('token')
          expect(value.email).toBe('test@test.ts')
        })
    const testRequest = httpMock.expectOne('http://localhost:5000/user/login')
    expect(testRequest.request.method).toBe('POST')
  })
  it('should call userSignup with the given route', () => {
    const user = {
      username: 'testingName',
      email: 'test@test.ts',
      password: '123456789'
    }
    authService.userRegister(user)
      .subscribe(
        (value) => {
          expect(value).toBe(user)
        })
    const testRequest = httpMock.expectOne('http://localhost:5000/user/signup')
    expect(testRequest.request.method).toBe('POST')
  })
  it('should call token validation', () => {
    const token = {
      token: 'kfjh9werfaowemnf893q4p3294nfdomnas'
    }
    authService.validateToken({ token })
      .subscribe(
        (value) => {
          router.navigate(['profile'])
          expect(value).toBe({ token })
        })
    const testRequest = httpMock.expectOne('http://localhost:5000/user/profile')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush({ token })
  })
  it('', () => {
    authService.log(['error message'])
  })
})
