import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{
  path: '', component: ListComponent,
  // children: [
  //   {
  //     path: '', component : ListComponent
  //   },
  //   {
  //     path: 'add', component : FormComponent
  //   }
  // ]




}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRoutingModule { }
