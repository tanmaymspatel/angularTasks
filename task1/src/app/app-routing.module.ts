import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { ParentComponent } from './parent/parent.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path : 'onewayBinding', component : OneWayBindingComponent},
  {path : 'twowayBinding', component : TwoWayComponent},
  {path : 'parentChildCommunication', component : ParentComponent},
  {path : 'structuratDirectives', component : StructuralComponent},
  {path : 'attributrDirectives', component : AttributeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
