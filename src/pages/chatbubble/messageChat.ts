export class MessageChat{
	id: string;
	content: string;
	position: string;
	time: string = new Date().toLocaleTimeString();
	senderName: string;
	img: string = "assets/img/hugh.png";
  
  
   constructor( content: string,position :string){
      this.content = content;
     this.position = position;   
   }
   
   
   

  
}


