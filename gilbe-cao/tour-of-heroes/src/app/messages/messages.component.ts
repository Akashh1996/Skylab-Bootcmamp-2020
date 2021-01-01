import { Component } from '@angular/core'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages = this.messageService.messages;
  clear = this.messageService.clear;

  constructor (public messageService: MessageService) { }
}
