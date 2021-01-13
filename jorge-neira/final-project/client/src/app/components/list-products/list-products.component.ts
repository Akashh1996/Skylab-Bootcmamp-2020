import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { IProductItem } from '../../store/models/product-item-model'
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { UserLoginStateService } from '../../services/user-login-state.service'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  productList$: Observable<IProductItem>
  public flag: boolean
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private userLoginState: UserLoginStateService

  ) {
    this.productList$ = this.route.queryParams.pipe(switchMap(() => {
      return this.productService.getProductByQuery(this.currentQuery)
    }))
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
  }

  get currentQuery (): string {
    return this.router.url.split('?')[1]
  }

  addProductToCart (productId: string) {
    this.flag && this.shoppingCartService.addProductCart(productId)
  }
}
