import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'

import { DialogAuthorMobile } from './dialog-author.component'
import { ListComponent } from '../list.component'

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { UserService } from 'src/app/service/user.service'
import { of } from 'rxjs'

describe('DialogAuthorComponent', () => {
  let component: DialogAuthorMobile
  let fixture: ComponentFixture<DialogAuthorMobile>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule
      ],
      declarations: [ListComponent, DialogAuthorMobile],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: UserService, useValue: { askIfFollowAuthor: () => of(null) } }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAuthorMobile)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call followAuthor fn', (done) => {
    const spyFn = spyOn(component, 'followAuthor').and.callThrough()
    component.followAuthor('alfredo')
    expect(spyFn).toHaveBeenCalled()
    done()
  })

  it('call ngAfterView fn', (done) => {
    const spyFn = spyOn(component, 'ngAfterView').and.callThrough()
    component.ngAfterView()
    expect(spyFn).toHaveBeenCalled()
    done()
  })

  it('call getAuthorInitials fn', (done) => {
    const spyFn = spyOn(component, 'getAuthorInitials').and.callThrough()
    component.getAuthorInitials('akash splash')
    expect(spyFn).toHaveBeenCalled()
    done()
  })

  it('call setIsFollowed fn', (done) => {
    const spyFn = spyOn(component, 'getAuthorInitials').and.callThrough()
    component.setIsFollowed(true)
    expect(spyFn).toHaveBeenCalled()
    done()
  })
})
