import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AttributeComponent } from './directive/components/attribute/attribute.component';
// import { StructuralComponent } from './directive/components/structural/structural.component';
import { MainComponent } from './core/components/main/main.component';
// import { OneWayBindingComponent } from './data-binding/components/one-way-binding/one-way-binding.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
// import { ParentComponent } from './parent/parent.component';
// import { TwoWayComponent } from './data-binding/components/two-way/two-way.component';
// import { ListComponent } from './user/list/list.component';

const routes: Routes = [
  {path : '', redirectTo:'form',pathMatch:'full'},
  {path : 'form', component : MainComponent},
  // {path : 'onewayBinding', component : OneWayBindingComponent},
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  // {path : 'twowayBinding', component : TwoWayComponent},
  // {path : 'parentChildCommunication', component : ParentComponent},
  // {path : 'structuratDirectives', component : StructuralComponent},
  // {path : 'attributrDirectives', component : AttributeComponent},
  {
    path: 'list',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'directive',
    loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)
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
    path: 'parentChildCommunication',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)
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
