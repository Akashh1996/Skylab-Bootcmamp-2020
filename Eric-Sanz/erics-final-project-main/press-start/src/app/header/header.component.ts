import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public auth: AngularFireAuth
  ) { }

  @Input() public changed: boolean = false;

  ngOnInit(): void {
  }
}
