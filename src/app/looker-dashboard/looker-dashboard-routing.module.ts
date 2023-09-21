import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookerDashboardPage } from './looker-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: LookerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookerDashboardPageRoutingModule {}
