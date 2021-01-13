import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth-service.service'
import { MessageService } from '../services/error-message.service'
import { UserLoginStateService } from '../services/user-login-state.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  errorMessage: string[] = this.messageService.messages

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor (
    private authService: AuthService,
    public messageService: MessageService,
    private formBuilder: FormBuilder,
    private userLoginState: UserLoginStateService,
    private route: Router
  ) {}

  onSubmit () {
    this.authService.userLogin(this.loginForm.value).subscribe(() => {
      this.messageService.clear()
    })
    this.userLoginState.getValue().subscribe((value) => {
      value ? this.route.navigate(['profile']) : this.route.navigate(['login'])
    })
  }
}
