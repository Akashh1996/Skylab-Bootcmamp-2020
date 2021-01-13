import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { IssueService } from '../issue.service';

import { PopUpChoseAverageComponent } from './pop-up-chose-average.component';

describe('PopUpChoseAverageComponent', () => {
  let component: PopUpChoseAverageComponent;
  let fixture: ComponentFixture<PopUpChoseAverageComponent>;
  let issueService: IssueService;
  let mockDialogRef: MatDialogRef<PopUpChoseAverageComponent>;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const dialogMock = {
    close: () => { },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpChoseAverageComponent],
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
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'], ['post']);
    issueService = new IssueService(httpClientSpy as any);
    fixture = TestBed.createComponent(PopUpChoseAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test setDropDownValue', () => {
    component.factions = 'Necrons';

    component.setDropDownValue();

    expect(component.chosenFaction).toEqual('Necrons');
  });
  it('test actionFunction setter', () => {
    component.factions = '';
    component.actionFunction();
    expect(issueService.selectedFaction).toEqual('');
  });
});
