import { Component } from '@angular/core'
import { UserLoginStateService } from '../../../services/user-login-state.service'

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent {
  constructor (
    private userLoginState: UserLoginStateService
  ) {}

  logout (): void {
    this.userLoginState.removeUser()
  }

  closeProfileSidebar (): void {
    const closeBtn = document.getElementById('toogleProfileSideBar')
    closeBtn.style.transform = 'translateX(350px)'
  }

  openProfileSidebar (): void {
    const openBtn = document.getElementById('toogleProfileSideBar')
    openBtn.style.transform = 'translateX(0)'
  }
}
