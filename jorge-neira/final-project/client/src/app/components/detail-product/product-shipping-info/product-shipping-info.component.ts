import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product-shipping-info',
  templateUrl: './product-shipping-info.component.html',
  styleUrls: ['./product-shipping-info.component.scss']
})
export class ProductShippingInfoComponent {
  @Input() stock: number
}
