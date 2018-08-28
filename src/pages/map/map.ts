import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  async ionViewDidLoad() {

    let location = await this.geolocation.getCurrentPosition()
    console.log(`${location.coords.latitude},${location.coords.longitude}`)
    this.lat = location.coords.latitude 
    this.lng = location.coords.longitude
  }

}
