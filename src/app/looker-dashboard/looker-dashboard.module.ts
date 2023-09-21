import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookerDashboardPageRoutingModule } from './looker-dashboard-routing.module';

import { LookerDashboardPage } from './looker-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LookerDashboardPageRoutingModule
  ],
  declarations: [LookerDashboardPage]
})
export class LookerDashboardPageModule {}
