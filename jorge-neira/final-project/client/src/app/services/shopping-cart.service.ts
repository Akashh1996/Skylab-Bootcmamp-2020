/* eslint-disable no-debugger */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { ProductService } from './product.service'
import { MessageService } from './error-message.service'
import { UserLoginStateService } from './user-login-state.service'

import { CartProducts, ShoppingCartModel } from '../store/models/shoppingCartModel'
import { IProductItem } from '../store/models/product-item-model'

const action = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  remove: 'REMOVE',
  removeAll: 'CLEAR'
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private mainEndpoint = 'http://192.168.1.134:5000' || 'http://localhost:5000'
  private cartEndpoint = '/cart';
  private flag: boolean = false
   public currentShoppignCart$: BehaviorSubject<ShoppingCartModel> | null

   constructor (
    private http: HttpClient,
    private messageService: MessageService,
    private productService: ProductService,
    private userLoginState: UserLoginStateService
   ) {
     this.currentShoppignCart$ = new BehaviorSubject<ShoppingCartModel>(null)
     this.userLoginState.getValue().subscribe(isUserLogged => {
       this.flag = isUserLogged
       if (isUserLogged) {
         this.user = this.userLoginState.getUser()
         this.getUserShoppingCart(this.user.id).subscribe((userShoppingCart) => {
           if (userShoppingCart) this.updatedCart = userShoppingCart
         })
       }
     })
   }

  user: any = this.getUserShoppingCart(this.myUser)
  updatedCart: ShoppingCartModel | null = null

  get myUser () {
    const user = this.userLoginState.getUser()
    return this.flag ? user.id : null
  }

  log (message: string[]): void {
    this.messageService.add(message)
  }

  getUserShoppingCart (userId: string): Observable<ShoppingCartModel> {
    const url = `${this.mainEndpoint}${this.cartEndpoint}/${userId}`
    return this.flag && this.http.get<ShoppingCartModel>(url).pipe(
      tap((value) => {
        this.currentShoppignCart$.next(value)
      })
    )
  }

  saveCurrentCart (shoppingCart:any): Observable<any> {
    this.currentShoppignCart$.next(shoppingCart)
    const url = `${this.mainEndpoint}${this.cartEndpoint}`
    return this.http.post<any>(url, { ...shoppingCart, _id: this.flag ? this.user.id : null }).pipe(
      tap(cart => {
        this.updatedCart = cart
      }),
      catchError(async (error) => {
        this.log(
          error.error.errors
            .map((error: any) => error.msg)
        )
      })
    )
  }

  updateShoppingCart (currentCartProductList: CartProducts[]) {
    const shoppingCartModel: ShoppingCartModel = {
      nbtotalproducts: this.updatedCart !== null
        ? this.updatedCart.nbtotalproducts
        : null,
      price: this.updatedCart !== null
        ? this.updatedCart.price
        : null,
      'price-float': this.updatedCart !== null
        ? this.updatedCart['price-float']
        : null,
      'shipping-price': 4.90,
      products: currentCartProductList
    }
    shoppingCartModel.nbtotalproducts = currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue.quantity, 0)

    shoppingCartModel.price = Number(currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue.price, 0).toFixed(2))

    shoppingCartModel['price-float'] = Number(currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue['price-float'], 0).toFixed(2))

    this.saveCurrentCart(shoppingCartModel).subscribe()
  }

  updateCartProductList (
    product: any = null,
    cartProductList: CartProducts[],
    change: string,
    productId: string | null
  ) {
    let currentCartProductList = cartProductList
    if (change === action.removeAll) {
      currentCartProductList = []
      return this.updateShoppingCart(currentCartProductList)
    }
    let noStock: boolean
    currentCartProductList.forEach((item, idx, array) => {
      switch (change) {
        case action.increment:
          if (
            item.id === product._id &&
            item.quantity < product.stock &&
            product['product-status'] === true
          ) {
            noStock = false
            item.quantity++
            item.price = product.price * item.quantity
            item['price-float'] = Number(((product.price / 1.21) *
              item.quantity).toFixed(2))
          } else {
            noStock = true
          }
          break
        case action.decrement:
          if (
            item.id === productId
          ) {
            if (item.quantity === 1) array.splice(idx, 1)
            item.quantity--
            item.price = product.price * item.quantity
            item['price-float'] = Number(((product.price / 1.21) *
            item.quantity).toFixed(2))
          }
          break
        case action.remove:
          if (
            item.id === productId
          ) {
            array.splice(idx, 1)
          }
          break
        default:
          break
      }
    })
    if (!noStock) this.updateShoppingCart(currentCartProductList)
  }

  pushNewProduct (product: any, cartProductList: CartProducts[]) {
    const currentCartProductList = cartProductList
    currentCartProductList.push({
      id: product._id,
      quantity: 1,
      price: product.price,
      'price-float': Number((product.price / 1.21).toFixed(2)),
      image: product.images[0],
      name: product.name,
      'product-status': product['product-status']
    })
    this.updateShoppingCart(currentCartProductList)
  }

  addProductCart (productId: string, change: string = action.increment): void {
    const cartProductList: CartProducts[] = this.updatedCart !== null
      ? this.updatedCart.products
      : []
    this.productService.getProductById(productId)
      .subscribe((product: IProductItem) => {
        switch (change) {
          case action.increment:
            if (cartProductList.find((cartList) =>
              cartList.id === product._id) === undefined
            ) {
              this.pushNewProduct(product, cartProductList)
              return true
            }
            this.updateCartProductList(product, cartProductList, change, null)
            break
          case action.decrement:
            this.updateCartProductList(
              product, cartProductList, change, productId
            )
            break
          case action.remove:
            this.updateCartProductList(
              product, cartProductList, change, productId
            )
            break
          default:
            break
        }
      })
  }
}
