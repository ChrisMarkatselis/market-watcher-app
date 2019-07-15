import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { SymbolListComponent } from './symbol-list/symbol-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { SymbolsComponent } from './symbols/symbols.component';

@NgModule({
  declarations: [SearchComponent, ActionButtonsComponent, SymbolListComponent, WatchListComponent, SymbolsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SymbolsComponent
    // ,
    // SearchComponent, ActionButtonsComponent, SymbolListComponent, WatchListComponent
  ]
})
export class SymbolsModule { }
