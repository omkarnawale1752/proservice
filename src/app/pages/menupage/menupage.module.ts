import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenupagePageRoutingModule } from './menupage-routing.module';

import { MenupagePage } from './menupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenupagePageRoutingModule
  ],
  declarations: [MenupagePage]
})
export class MenupagePageModule {}
