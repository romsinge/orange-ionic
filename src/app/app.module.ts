import { ComponentsModule } from './../components/components.module';
import { ContactListPageModule } from './../pages/contact-list/contact-list.module';
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
import { Geolocation } from '@ionic-native/geolocation'
import { GOOGLEMAPS_API_KEY } from '../apiKeys';
import { NativeStorage } from '@ionic-native/native-storage'
import { DataProvider } from '../providers/data/data';

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
    ContactListPageModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLEMAPS_API_KEY
    }),
    ComponentsModule
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
    Geolocation,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
