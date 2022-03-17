import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MentorsComponent } from './mentors.component';

const routes: Routes = [{ path: '', component: MentorsComponent,
children:[
  // {
  //   path:"list", component: MentorsContainerComponent
  // },
  // {
  //   path:"", redirectTo:"list", pathMatch:"full"
  // }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
