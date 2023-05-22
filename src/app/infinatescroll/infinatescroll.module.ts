import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinatescrollPageRoutingModule } from './infinatescroll-routing.module';

import { InfinatescrollPage } from './infinatescroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinatescrollPageRoutingModule
  ],
  declarations: [InfinatescrollPage]
})
export class InfinatescrollPageModule {}
