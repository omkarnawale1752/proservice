import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatedrivenformPageRoutingModule } from './templatedrivenform-routing.module';

import { TemplatedrivenformPage } from './templatedrivenform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatedrivenformPageRoutingModule
  ],
  declarations: [TemplatedrivenformPage]
})
export class TemplatedrivenformPageModule {}
