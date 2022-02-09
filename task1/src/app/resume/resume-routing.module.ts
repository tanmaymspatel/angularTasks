import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  {
    path:'', component: ResumeComponent, children :[
      {
        path : '' , component : ResumeFormComponent,
      },
      {
        path : 'resume-view' , component : ResumeViewComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
