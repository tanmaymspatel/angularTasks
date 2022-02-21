import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeFormComponent } from './component/resume-form/resume-form.component';
import { ResumeViewComponent } from './component/resume-view/resume-view.component';


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
