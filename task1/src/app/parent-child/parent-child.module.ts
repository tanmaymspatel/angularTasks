import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentChildComponent } from './parent-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    ParentChildComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ]
})
export class ParentChildModule { }
