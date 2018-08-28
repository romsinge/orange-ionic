import { NgModule } from '@angular/core';
import { AddContactComponent } from './add-contact/add-contact';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AddContactComponent],
	entryComponents: [AddContactComponent],
	imports: [IonicModule],
	exports: [AddContactComponent]
})
export class ComponentsModule {}
