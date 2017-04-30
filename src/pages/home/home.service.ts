import { Injectable  } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ChatBotMessageRequest } from './ChatBotMessageRequest';
import { ChatBotMessageResponse } from './ChatBotMessageResponse';

@Injectable()
export class HomeService{
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private chatServerUrl = "http://localhost:8080/chatbot-ws/api/ia/chatbot"
  
  
  constructor(private http: Http) { }
  
  
  requestIAServer (chatBotMessageRequest: ChatBotMessageRequest): Promise<ChatBotMessageResponse> {
      return this.http
        .post(this.chatServerUrl, JSON.stringify(chatBotMessageRequest), {headers: this.headers})
        .toPromise().then(res => res.json() as ChatBotMessageResponse)
        .catch(this.handleError);
    }
  
   private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

  
}
