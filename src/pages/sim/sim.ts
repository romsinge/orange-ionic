import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'sim'
})
@Component({
  selector: 'page-sim',
  templateUrl: 'sim.html',
})
export class SimPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  image: string = ""

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimPage');
  }

  handlePhotoClick() {
    this.camera.getPicture(this.options).then(imageData => {
      
      this.image = "data:image/jpeg;base64," + imageData
    })
  }
}
