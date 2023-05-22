import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraPluginPage } from './camera-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: CameraPluginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraPluginPageRoutingModule {}
