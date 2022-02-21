import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './components/attribute/attribute.component';
import { StructuralComponent } from './components/structural/structural.component';

const routes: Routes = [
  {
    path:'', children :[
      {
        path : 'structural' , component : StructuralComponent,
      },
      {
        path : 'attribute' , component : AttributeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
