import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageChat } from './messageChat';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chatbubble.html'
})


export class ChatBubbleComponent {

   @Input() message: MessageChat;
  constructor(public navCtrl: NavController) {
  }
  
 
}
