import { Component } from '@angular/core'
import { UserLoginStateService } from '../../services/user-login-state.service'
import { Observable } from 'rxjs'
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { ShoppingCartModel } from '../../store/models/shoppingCartModel'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public flag: boolean
  constructor (
    private userLoginState: UserLoginStateService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
  }

  shoppingCart$: Observable<ShoppingCartModel> | null = this.shoppingCartService.currentShoppignCart$

  onTop ():void {
    window.scrollTo(0, 0)
  }

    time = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000)
    });
}
