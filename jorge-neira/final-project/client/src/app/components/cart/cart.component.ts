import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { UserLoginStateService } from '../../services/user-login-state.service'
import { ShoppingCartModel, CartProducts } from '../../store/models/shoppingCartModel'

const action = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  remove: 'REMOVE',
  removeAll: 'CLEAR'
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public flag: boolean
  private currentUser: string

  constructor (
    private shoppingCartService: ShoppingCartService,
    private userLoginState: UserLoginStateService
  ) {

  }

  shoppingCart$: Observable<ShoppingCartModel> | null = this.shoppingCartService.currentShoppignCart$

  get myuser () {
    this.userLoginState.getValue().subscribe((state) => {
      this.flag = state
    })
    this.userLoginState.getLocalUser().subscribe((user) => {
      this.currentUser = user.id
    })
    return this.flag ? this.currentUser : null
  }

  incrementProductUnits (id: string) {
    this.shoppingCartService.addProductCart(id, action.increment)
  }

  decrementProductUnits (id: string) {
    this.shoppingCartService.addProductCart(id, action.decrement)
  }

  removeProductUnit (id: string) {
    this.shoppingCartService.addProductCart(id, action.remove)
  }

  removeAllProduct (currentCartList: CartProducts[]) {
    this.shoppingCartService.updateCartProductList(null, currentCartList, action.removeAll, null)
    window.scrollTo(0, 0)
  }

  purchase (currentCartList: CartProducts[]) {
    this.removeAllProduct(currentCartList)
  }

  ngOnInit (): void {
    this.userLoginState.getValue().subscribe((state) => {
      this.flag = state
      !this.flag && (this.shoppingCart$ = null)
    })
    this.flag && this.shoppingCartService.getUserShoppingCart(this.myuser)
  }
}
