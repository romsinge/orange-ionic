import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(
    public nativeStorage: NativeStorage,
    private platform: Platform
  ) {
    
  }

  contacts: any[] = [
    {
      name: 'Michel',
      phoneNumber: '00222466474',
      email: 'michel@gmail.com'
    },
    {
      name: 'Mahmoud',
      phoneNumber: '0022241234',
      email: 'mahmoud@gmail.com'
    }
  ]

  async initStorage() {
    let contacts = await this.nativeStorage.getItem('contacts')

    if (contacts && contacts.length) {
      return
    }
    
    await this.nativeStorage.setItem('contacts', this.contacts)
  }

  getContacts() {
    return this.nativeStorage.getItem('contacts')
  }

  async setContact(newContact) {
    let contacts = await this.nativeStorage.getItem('contacts')

    contacts.push(newContact)

    await this.nativeStorage.setItem('contacts', contacts)
  }
}
