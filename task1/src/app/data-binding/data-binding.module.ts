import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    OneWayBindingComponent, 
    TwoWayComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
