import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : '', redirectTo:'form',pathMatch:'full'},
  {path : 'form', component : MainComponent},
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
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
    path: 'parentChild',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)
  },
  {
    path: 'dynamic-template',
    loadChildren: () => import('./dynamictemplating/dynamictemplating.module').then(m => m.DynamictemplatingModule)
  },
  {
    path: 'mvp',
    loadChildren: () => import('./mentors/mentors.module').then(m => m.MentorsModule)
  },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  {
  path:'**', component : PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
