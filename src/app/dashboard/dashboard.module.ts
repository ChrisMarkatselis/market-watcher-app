import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { ChartsComponent } from './charts/charts.component';
import { WatchListItemComponent } from './watch-list/watch-list-item/watch-list-item.component';
import { ChartItemComponent } from './charts/chart-item/chart-item.component';

@NgModule({
  declarations: [DashboardComponent, WatchListComponent, ChartsComponent, WatchListItemComponent, ChartItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
    // ,
    // ChartsComponent,
    // WatchListComponent,
    // WatchListItemComponent, 
    // ChartItemComponent
  ]
})
export class DashboardModule { }
