import { DataProvider } from './../../providers/data/data';
import { ViewController, Form } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the AddContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactComponent {

  constructor(
    private viewCtrl: ViewController,
    private data: DataProvider
  ) {
    
  }

  contactForm: FormGroup

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  handleSubmit(e: any) {
    e.preventDefault()

    let contact = this.contactForm.value
    
    this.viewCtrl.dismiss(contact)
  }
}
