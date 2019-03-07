import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {NuevoContactoPage} from '../nuevo-contacto/nuevo-contacto';
import { AcercaDePage } from '../acerca-de/acerca-de';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts: Contact[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ContactService:ContactService) {
  }

  ionViewWillEnter(){
    this.contacts = this.ContactService.getContacts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  onAddContact(value:
    {nombre:string,organizacion:string,movil:string,correo:string}){
      this.ContactService.addContact(value);
      this.navCtrl.pop();
  }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }

}
