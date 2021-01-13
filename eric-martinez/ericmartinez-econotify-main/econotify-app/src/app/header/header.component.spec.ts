import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HeaderComponent } from './header.component'
import { ListComponent } from '../list/list.component'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialog } from '@angular/material/dialog'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  const matDialogStub = {
    open: () => {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{ path: 'list', component: ListComponent }])],
      providers: [
        { provide: MatDialog, useValue: matDialogStub }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call next()', (done) => {
    spyOn(component.searchTerms, 'next')
    const fixture = TestBed.createComponent(HeaderComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    let inputSearch = compiled.querySelector('.input_search').value
    inputSearch = 'hola'
    component.search(inputSearch)
    expect(component.searchTerms.next).toHaveBeenCalled()
    done()
  })
/*   it('should call next()', (done) => {
    spyOn(component.searchTerms.pipe(switchMap()), 'next');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(component.searchTerms.next).toHaveBeenCalled();
    done()
  }) */
})
