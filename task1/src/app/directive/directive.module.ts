import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';
import { AttributeComponent } from './components/attribute/attribute.component';
import { StructuralComponent } from './components/structural/structural.component';


@NgModule({
  declarations: [
    DirectiveComponent, 
    FirstCapitalPipe,
    AttributeComponent,
    StructuralComponent
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectiveModule { }
