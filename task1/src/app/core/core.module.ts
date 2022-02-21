import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    CoreComponent, 
    MainComponent,
    SidebarComponent,
    MainContentComponent,
 
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    SidebarComponent,
    MainContentComponent
  ]
})
export class CoreModule { }
