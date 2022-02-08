import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'', component: UserComponent, children :[
      {
        path : '' , component : ListComponent,
      },
      {
        path : 'add' , component : FormComponent,
      },
      {
        path : 'edit/:id' , component : FormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
