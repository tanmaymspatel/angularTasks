import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamictemplatingRoutingModule } from './dynamictemplating-routing.module';
import { DynamictemplatingComponent } from './dynamictemplating.component';
import { DisplayModeComponent } from './components/display-mode/display-mode.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DynamictemplatingComponent,
    DisplayModeComponent,
    ItemViewComponent
  ],
  imports: [
    CommonModule,
    DynamictemplatingRoutingModule,
    FormsModule]
})
export class DynamictemplatingModule { }
