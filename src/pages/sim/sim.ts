import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Sim } from '@ionic-native/sim'
import { Uid } from '@ionic-native/uid';

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
    private camera: Camera,
    private platform: Platform,
    private sim: Sim,
    private uid: Uid,
    private androidPermissions: AndroidPermissions
  ) {
  }

  simData: any
  uidData: any

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
    if (this.platform.is('cordova')) {
      this.camera.getPicture(this.options).then(imageData => {
      
        this.image = "data:image/jpeg;base64," + imageData
      })
    } else {
      console.log("Cordova not available")
    }
  }

  handleSimClick() {
    this.sim.getSimInfo().then(info => {
      this.simData = info
    }, err => {
      this.simData = `Erreur : ${err}`
    })
  }

  async handleUidClick() {
    
    const { hasPermission } = 
    await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );

    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      )

      if (!result.hasPermission) {
        throw new Error('Permission required')
      }

      return
    }

    return this.uidData = this.uid

  }
}
