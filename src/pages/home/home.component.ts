import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageChat } from '../chatbubble/messageChat';
import { HomeService } from './home.service';
import { ChatBotMessageRequest } from './ChatBotMessageRequest';
import { ChatBotMessageResponse } from './ChatBotMessageResponse';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController,private homeService: HomeService ) {
  }
  
  userMsg= "test-msg";
  messages : MessageChat[]=[];
  position = 'right';
  
  handleSendMsg(){
    this.handleNewUserMsg();
    this.homeService.requestIAServer(new ChatBotMessageRequest(this.userMsg,"simple user")).then(msg => this.handleNewServerMsg(msg));
    this.userMsg = "";
  };
  
  handleNewUserMsg(){
    let userMsg = new MessageChat(this.userMsg,"left");
    userMsg.senderName = "simple user";
    this.messages.push(userMsg);
  }
  
  handleNewServerMsg(chatBotMessageResponse : ChatBotMessageResponse){
    let serverMsg = new MessageChat(chatBotMessageResponse.message,"right");
    serverMsg.senderName = "server";
    serverMsg.img =  "assets/img/einstien.png";
    this.messages.push(serverMsg);
  }
  

}
