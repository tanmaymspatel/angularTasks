import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { DataBindingComponent } from './data-binding.component';

const routes: Routes = [
  {
    path:'', children :[
      {
        path : 'onewayBinding' , component : OneWayBindingComponent,
      },
      {
        path : 'twowayBinding' , component : TwoWayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
