import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListComponent } from './comonents/list/list.component';
import { FormComponent } from './comonents/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryPipePipe } from './pipes/category-pipe.pipe';

import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    FormComponent,
    FilterPipe,
    CategoryPipePipe,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    OverlayModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class UserModule { }
