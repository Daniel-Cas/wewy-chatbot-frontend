import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from "./primeng/primeng.module";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { WebSocketService } from './services/web-socket.service'
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";

const config: SocketIoConfig = {
  url: environment.serverSocket, // socket server url;
  options: {
    transports: ['websocket']
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PrimengModule,
        BrowserAnimationsModule,
        SocketIoModule.forRoot(config),
        FormsModule,

    ],
  providers: [ WebSocketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
