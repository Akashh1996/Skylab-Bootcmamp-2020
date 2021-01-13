import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth-service.service'
import { MessageService } from '../services/error-message.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (
    private authService: AuthService,
    public messageService: MessageService,
    private formBuilder: FormBuilder
  ) {}

   errorMessage: string[] = this.messageService.messages

    registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    onSubmit () {
      this.authService.userRegister(this.registerForm.value).subscribe((event) => {
        this.messageService.clear()
      })
    }
}
