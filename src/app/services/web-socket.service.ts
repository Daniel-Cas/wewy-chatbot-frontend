import {EventEmitter, Injectable, Output} from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";
import { environment } from "../../environments/environment";
import {EMPTY, Subject, tap} from "rxjs";
import { catchError, switchAll } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket$!: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe(switchAll<any>(), catchError(e => {
    throw e
  }))

  constructor() {

  }

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(
        tap({
          error: error => console.log(error),
        }), catchError(_ => EMPTY));
      this.messagesSubject$.next(messages);
    }
  }


  private getNewWebSocket() {
    return webSocket( environment.serverSocket);
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  close() {
    this.socket$.complete();
  }

}
