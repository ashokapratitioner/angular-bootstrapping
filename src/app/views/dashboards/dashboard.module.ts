import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTeamsComponent } from './components/dashboard-teams/dashboard-teams.component';
import { YellowBackgroundDirective } from '../../shared/directives/yellow-background.directive';
import { DateTimePipe } from '../../shared/pipes/date-time.pipe';

@NgModule({
  declarations: [
    YellowBackgroundDirective,
    DateTimePipe,
    DashboardComponent,
    DashboardTeamsComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
