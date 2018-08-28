import { AddContactComponent } from './../../components/add-contact/add-contact';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    private modalCtrl: ModalController
  ) {
  }

  contacts$: Promise<any[]>

  ionViewDidLoad() {

    this.data.initStorage().then(() => {
      this.contacts$ = this.data.getContacts()
    })
  }

  handleAddContactClick() {
    let addContactModal = this.modalCtrl.create(AddContactComponent)
    
    addContactModal.onDidDismiss(newContact => {
      this.data.setContact(newContact).then(() => {
        this.contacts$ = this.data.getContacts()
      })
    })

    addContactModal.present()
  }
}
