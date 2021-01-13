import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductShippingInfoComponent } from './product-shipping-info.component'

describe('ProductShippingInfoComponent', () => {
  let component: ProductShippingInfoComponent
  let fixture: ComponentFixture<ProductShippingInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductShippingInfoComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShippingInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
