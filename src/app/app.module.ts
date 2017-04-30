import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.component';
import { ChatBubbleComponent } from '../pages/chatbubble/chatbubble.component';
import { HomeService } from '../pages/home/home.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HomeService
  ]
})
export class AppModule { }
