import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { DialogDetailMobile } from './dialog-detail.component'
import { ListComponent } from '../list.component'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('DialogDetailComponent', () => {
  let component: DialogDetailMobile
  let fixture: ComponentFixture<DialogDetailMobile>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule
      ],
      declarations: [ListComponent, DialogDetailMobile],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailMobile)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /* it('call backClick fn', (done) => {
    spyOn(component, 'backClick').and.callThrough()
    const compiled = fixture.nativeElement
    const closeButton = compiled.querySelector('.icon_clear-button')
    console.log('--------->' + closeButton)
    closeButton.click()
    expect(component.backClick).toHaveBeenCalled()
    done()
  }) */
})
