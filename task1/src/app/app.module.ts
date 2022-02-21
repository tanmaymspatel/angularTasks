import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { MainComponent } from './core/components/main/main.component';
import { HelloComponent } from './new-module/hello/hello.component';
// import { OneWayBindingComponent } from './data-binding/components/one-way-binding/one-way-binding.component';
// import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './parent/child/child.component';
// import { TwoWayComponent } from './data-binding/components/two-way/two-way.component';
import { StructuralComponent } from './directive/components/structural/structural.component';
import { AttributeComponent } from './directive/components/attribute/attribute.component';
import { FirstCapitalPipe } from './first-capital.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MainContentComponent } from './core/components/main-content/main-content.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { CoreModule } from './core/core.module';
// import { FilterDataPipe } from './Assessment/pipe/filter-data.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HelloComponent,
    StructuralComponent,
    AttributeComponent,
    FirstCapitalPipe,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
