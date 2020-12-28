import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask4no2Page } from './labtask4no2.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask4no2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask4no2PageRoutingModule {}
