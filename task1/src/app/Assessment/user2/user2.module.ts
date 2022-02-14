import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User2RoutingModule } from './user2-routing.module';
import { User2Component } from './user2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientNamePipe } from '../pipe/client-name.pipe';
import { OfficeNamePipe } from '../pipe/office-name.pipe';
import { FilterDataPipe } from '../pipe/filter-data.pipe';



@NgModule({
  declarations: [
    User2Component,
    ClientNamePipe,
    OfficeNamePipe,
    FilterDataPipe
 
  ],
  imports: [
    CommonModule,
    User2RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class User2Module { }
