import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalPageRoutingModule } from './hospital-routing.module';

import { HospitalPage } from './hospital.page';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [HospitalPage]
})
export class HospitalPageModule {}
