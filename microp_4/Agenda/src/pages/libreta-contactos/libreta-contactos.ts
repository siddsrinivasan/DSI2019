import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {NuevoContactoPage} from '../nuevo-contacto/nuevo-contacto';
import { AcercaDePage } from '../acerca-de/acerca-de';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }

}
