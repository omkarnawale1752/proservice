import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalinfoPage } from './hospitalinfo.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalinfoPageRoutingModule {}
