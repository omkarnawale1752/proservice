import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalinfoPageRoutingModule } from './hospitalinfo-routing.module';

import { HospitalinfoPage } from './hospitalinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalinfoPageRoutingModule
  ],
  declarations: [HospitalinfoPage]
})
export class HospitalinfoPageModule {}
