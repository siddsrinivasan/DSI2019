import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LibretaContactosPage } from './libreta-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: LibretaContactosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LibretaContactosPage]
})
export class LibretaContactosPageModule {}
