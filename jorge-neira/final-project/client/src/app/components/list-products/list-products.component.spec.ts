import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ListProductsComponent } from './list-products.component'

describe('ListProductsComponent', () => {
  let component: ListProductsComponent
  let fixture: ComponentFixture<ListProductsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule],
      declarations: [ListProductsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    component.flag = false
    component.addProductToCart('id')
    expect(component).toBeTruthy()
  })
  it('should create', () => {
    component.flag = true
    component.addProductToCart('id')
    expect(component).toBeTruthy()
  })
})
