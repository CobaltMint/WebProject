import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask4no2PageRoutingModule } from './labtask4no2-routing.module';

import { Labtask4no2Page } from './labtask4no2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask4no2PageRoutingModule
  ],
  declarations: [Labtask4no2Page]
})
export class Labtask4no2PageModule {}
