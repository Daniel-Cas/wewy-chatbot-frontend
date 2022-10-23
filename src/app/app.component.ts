import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "./services/web-socket.service";
import {webSocket} from "rxjs/webSocket";
import {Message} from "./interfaces/message";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wewy-chatbot';
  message: String = '';
  data: String = '';
  chats: Message[] = []
  subject = webSocket("ws://localhost:8000/test");

  constructor() {
  }

  ngOnInit(): void {
   this.listenInfo();
  }

  sendInfo(message: String): void {
    let auxMessage: Message = {
      message: message,
      messageType: 'INPUT'
    }
    this.chats.push(auxMessage)
    this.subject.next({message: message});
  }

  listenInfo(){
    this.subject.subscribe(
      msg => {
        console.log('Message received: ' + msg)
        let auxMessage: Message = {
          message: msg,
          messageType: 'OUTPUT'
        }
        this.chats.push(auxMessage)
      },
      err => console.error(err),
      () => console.info('Complete')
    )
  }


}
