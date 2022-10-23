import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "./services/web-socket.service";
import {connect, map, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {webSocket} from "rxjs/webSocket";

const subject = webSocket("ws://localhost:8000/test");


interface Message {
  message?: String | unknown;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wewy-chatbot';
  showMessage: Message = {};
  message: String = '';
  data: String = '';

  constructor(protected socketService: WebSocketService) {
  }

  ngOnInit(): void {
   this.listenInfo();
  }

  sendInfo(message: String): void {
    subject.next({message: message});
  }

  listenInfo(){
    subject.subscribe(
      msg => {
        console.log('Message received: ' + msg)
        this.showMessage.message = msg;
      },
      err => console.error(err),
      () => console.info('Complete')
    )
  }


}
