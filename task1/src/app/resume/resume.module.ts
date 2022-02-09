import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule, 
    ReactiveFormsModule
  ]
})
export class ResumeModule { }
