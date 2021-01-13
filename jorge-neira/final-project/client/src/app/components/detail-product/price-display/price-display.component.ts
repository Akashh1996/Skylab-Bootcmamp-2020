import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent {
  @Input() price: number
  @Input() sales: number
}
