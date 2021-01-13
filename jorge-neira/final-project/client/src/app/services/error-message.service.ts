import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  add (messages: string[]) {
    messages.forEach(message => this.messages.push(message))
  }

  clear () {
    this.messages = []
  }
}
