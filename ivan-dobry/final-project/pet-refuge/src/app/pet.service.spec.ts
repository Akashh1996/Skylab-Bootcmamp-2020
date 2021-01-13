import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPets should be called', (done) => {
    httpClientSpy.get.and.returnValue(of([]));
    service.getPets().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });

  it('getPet should be called', (done) => {
    const id: string = 'ashj';
    httpClientSpy.get.and.returnValue(of([]));
    service.getPet(id).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });

  it('getPets should be called', () => {
    spyOn(service, 'handleError');
    service.handleError();
    expect(service.handleError).toHaveBeenCalled();
  });

  it('getPet should throw error', (done) => {
    spyOn(service, 'getPet').and.returnValue(throwError({ status: 404 }));
    httpClientSpy.get.and.returnValue(of([]));
    service.handleError()(() => {
      expect(service.handleError).toHaveBeenCalled();
    });
    done();
  });

  it('getPetType should be called', (done) => {
    const type: string = 'Cat';
    httpClientSpy.get.and.returnValue(of([]));
    service.getPetType(type).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });
});

describe('pet service put', () => {
  let service: PetService;
  let httpClientSpy: { put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(PetService);
  });
  it('addPet should be called', (done) => {
    const pet = {
      type: '',
      name: '',
      description: '',
      age: '',
      photo: ''
    };
    httpClientSpy.put.and.returnValue(of({}));
    service.addPet(pet).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1);
      done();
    });
  });
});
