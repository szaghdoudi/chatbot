export class ChatBotMessageRequest{
  user: string;
  message: string;
  
  constructor( message: string,user: string){
    this.message = message;
    this.user = user;
  }
  
  
}
