import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatedrivenformPage } from './templatedrivenform.page';

const routes: Routes = [
  {
    path: '',
    component: TemplatedrivenformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatedrivenformPageRoutingModule {}
