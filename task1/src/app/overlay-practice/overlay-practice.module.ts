import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayPracticeRoutingModule } from './overlay-practice-routing.module';
import { OverlayPracticeComponent } from './overlay-practice.component';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    OverlayPracticeComponent,
    FormOverlayComponent
  ],
  imports: [
    CommonModule,
    OverlayPracticeRoutingModule,
    OverlayModule
  ]
})
export class OverlayPracticeModule { }
