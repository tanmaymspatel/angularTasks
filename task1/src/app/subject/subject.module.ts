import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectService } from './services/subject.service';


@NgModule({
  declarations: [
    SubjectComponent,
    SubjectFormComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    SubjectService
  ]
})
export class SubjectModule { }
