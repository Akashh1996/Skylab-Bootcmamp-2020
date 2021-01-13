import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGeneralSpecsComponent } from './product-general-specs.component';

describe('ProductGeneralSpecsComponent', () => {
  let component: ProductGeneralSpecsComponent;
  let fixture: ComponentFixture<ProductGeneralSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGeneralSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGeneralSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
