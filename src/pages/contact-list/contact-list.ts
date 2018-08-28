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

  contacts: any[] = []
  currentPage: number = 0

  ionViewDidLoad() {

    this.data.initStorage().then(() => {
      this.data.getContacts(0).then(contacts => {
        this.contacts = contacts
      })
    })
  }

  handleAddContactClick() {
    let addContactModal = this.modalCtrl.create(AddContactComponent)
    
    addContactModal.onDidDismiss(newContact => {
      this.data.setContact(newContact).then(() => {
        this.data.getContacts(0).then(contacts => {
          this.contacts = contacts
        })
      })
    })

    addContactModal.present()
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.data.getContacts(this.currentPage + 1).then(newContacts => {
        console.log(newContacts)
        this.contacts = this.contacts.concat(newContacts)
        this.currentPage++

        infiniteScroll.complete()
      })
    }, 1000)
  }
}
