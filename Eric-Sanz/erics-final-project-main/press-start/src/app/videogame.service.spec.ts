import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { VideogameService } from './videogame.service';

describe('VideogameService', () => {
  let service: VideogameService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });

    service = TestBed.inject(VideogameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data of videogames', (done) => {
    httpClientSpy.get.and.returnValue(of([]));
    service.getVideogames().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
    })
    done();
  })

  it('Should get error from getVideogames', () => {
    spyOn(service, 'handleError');
    service.handleError();
    expect(service.handleError).toHaveBeenCalled();
  })

  it('Should call get videogame by id', (done) => {
    const _id: string = 'bf8735';
    httpClientSpy.get.and.returnValue(of([]));
    service.getVideogame(_id).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
    })
    done();
  })

  it('should get an error from calling getVideogame', (done) => {
    spyOn(service, 'getVideogame').and.returnValue(throwError({ status: 404 }));
    httpClientSpy.get.and.returnValue(of([]));
    service.handleError()(() => {
      expect(service.handleError).toHaveBeenCalled();
    });
    done();
  })

  it('should get search videogame', (done) => {
    const term: string = 'videogame';
    httpClientSpy.get.and.returnValue(of([]));
    service.searchVideogame(term).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
    })
    done();
  })
});
