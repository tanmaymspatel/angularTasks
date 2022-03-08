import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayModeComponent } from './components/display-mode/display-mode.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { DynamictemplatingComponent } from './dynamictemplating.component';

const routes: Routes = [
  {
    path:'', component: DynamictemplatingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamictemplatingRoutingModule { }
