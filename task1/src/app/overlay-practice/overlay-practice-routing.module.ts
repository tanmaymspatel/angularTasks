import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayPracticeComponent } from './overlay-practice.component';

const routes: Routes = [{ path: '', component: OverlayPracticeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayPracticeRoutingModule { }
