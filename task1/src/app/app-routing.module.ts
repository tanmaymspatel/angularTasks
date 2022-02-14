import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { MainComponent } from './main/main.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { TwoWayComponent } from './two-way/two-way.component';
// import { ListComponent } from './user/list/list.component';

const routes: Routes = [
  {path : '', redirectTo:'form',pathMatch:'full'},
  {path : 'form', component : MainComponent},
  {path : 'onewayBinding', component : OneWayBindingComponent},
  {path : 'twowayBinding', component : TwoWayComponent},
  {path : 'parentChildCommunication', component : ParentComponent},
  {path : 'structuratDirectives', component : StructuralComponent},
  {path : 'attributrDirectives', component : AttributeComponent},
  {
    path: 'list',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'resume-form',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'assessment',
    loadChildren: () => import('./Assessment/user2/user2.module').then(m => m.User2Module)
  },
  {
  path:'**', component : PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
