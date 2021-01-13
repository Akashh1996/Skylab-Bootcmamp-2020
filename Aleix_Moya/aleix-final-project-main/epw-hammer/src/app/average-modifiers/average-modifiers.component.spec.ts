import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AverageModifiersComponent } from './average-modifiers.component';
import { EpwhammerService } from '../epwhammer.service';
import { Modifiers } from '../DataModifiers';
import { IssueService } from '../issue.service';

describe('Save Function', () => {
  let component: AverageModifiersComponent;
  let fixture: ComponentFixture<AverageModifiersComponent>;
  let service: EpwhammerService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const dialogMock = {
    close: () => { },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageModifiersComponent],
      imports: [HttpClientTestingModule],
      providers: [
        IssueService,
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call save()', () => {
    const spyedFunctionSave = spyOn(component, 'save').and.callThrough();
    component.save();
    expect(spyedFunctionSave).toHaveBeenCalled();
  });
  it('should reset modifiers', () => {
    const newModifiers: Modifiers = {
      Hit: 0,
      Wound: 0,
      Save: 0,
      FnP: 7,
      Damage: 0,
      ModAp: 0,
      SInV: 7,
      rerollHits: 'none',
      rerollWounds: 'none',
      rerollSaved: 'none',
      rerollDamage: 'none',
    };
    component.resetModifiers();
    expect(component.epwhammerService.currentModifiers).toEqual(newModifiers);
  });
  it('test actionFunction', () => {
    const spyCloseModal = spyOn(component, 'closeModal').and.callThrough();
    component.actionFunction();
    expect(spyCloseModal).toHaveBeenCalled();
  });
});
