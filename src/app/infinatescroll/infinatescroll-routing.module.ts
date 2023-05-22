import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinatescrollPage } from './infinatescroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinatescrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinatescrollPageRoutingModule {}
