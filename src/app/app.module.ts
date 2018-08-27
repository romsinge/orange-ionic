import { SimPageModule } from './../pages/sim/sim.module';
import { MapPageModule } from './../pages/map/map.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera'
import { Sim } from '@ionic-native/sim';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Uid } from '@ionic-native/uid';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SimPageModule,
    MapPageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDkRtKIq2c9gEsZcQ-QAj9BVxH_heiUTE'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Sim,
    Uid,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
