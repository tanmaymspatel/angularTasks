import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentChildComponent } from './parent-child.component';


@NgModule({
  declarations: [
    ParentChildComponent
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ]
})
export class ParentChildModule { }
