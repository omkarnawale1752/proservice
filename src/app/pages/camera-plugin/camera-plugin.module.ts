import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPluginPageRoutingModule } from './camera-plugin-routing.module';

import { CameraPluginPage } from './camera-plugin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPluginPageRoutingModule
  ],
  declarations: [CameraPluginPage]
})
export class CameraPluginPageModule {}
