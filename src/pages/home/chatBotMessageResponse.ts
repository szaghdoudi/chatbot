export class ChatBotMessageResponse{
  error: string;
  message: string;
  
   constructor( message: string,error: string){
    this.message = message;
    this.error = error;
  }
}
