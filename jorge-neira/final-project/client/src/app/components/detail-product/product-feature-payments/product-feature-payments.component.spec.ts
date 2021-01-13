import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductFeaturePaymentsComponent } from './product-feature-payments.component'

describe('ProductFeaturePaymentsComponent', () => {
  let component: ProductFeaturePaymentsComponent
  let fixture: ComponentFixture<ProductFeaturePaymentsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFeaturePaymentsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturePaymentsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
