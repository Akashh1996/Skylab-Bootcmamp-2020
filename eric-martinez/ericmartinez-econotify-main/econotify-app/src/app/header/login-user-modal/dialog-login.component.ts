import { Component, ViewEncapsulation } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { UserService } from '../../service/user.service'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { UserLoginStateService } from '../../service/user-login-state.service'
import firebase from 'firebase/app'

 @Component({
   selector: 'dialog-detail.component',
   templateUrl: 'dialog-login.component.html',
   styleUrls: ['./dialog-login.component.scss'],
   encapsulation: ViewEncapsulation.None
 })
export class DialogLoginMobile {
  constructor (
    public dialogRef: MatDialogRef<DialogLoginMobile>,
    public auth: AngularFireAuth,
    public userService: UserService,
    private userLoginStateService: UserLoginStateService,
    private _router: Router
  ) {}

  async googleSignin () {
    const { user } = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.userLoginStateService.setUser(user)
    this.userService.saveUser(user).subscribe()
    if (user) {
      this.dialogRef.close()
      this._router.navigate(['/login'])
    }
    return user
  }

  closeDialog (): void {
    this.dialogRef.close()
  }
}
