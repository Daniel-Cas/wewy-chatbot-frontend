import {Injectable} from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  subject = webSocket(environment.serverSocket);

  constructor() {

  }


}
