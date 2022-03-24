import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorsComponent } from './mentors.component';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MentorsFormPresentationComponent } from './mentors-form-container/mentors-form-presentation/mentors-form-presentation.component';
import { MentorsListPresentationComponent } from './mentors-list-container/mentors-list-presentation/mentors-list-presentation.component';
import { MentorsService } from './mentors.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MentorlistFilterPresentationComponent } from './mentors-list-container/mentors-list-presentation/mentorlist-filter-presentation/mentorlist-filter-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    MentorsComponent,
    MentorsFormContainerComponent,
    MentorsListContainerComponent,
    MentorsFormPresentationComponent,
    MentorsListPresentationComponent,
    MentorlistFilterPresentationComponent
  ],

  imports: [
    CommonModule,
    MentorsRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers:[MentorsService]
})
export class MentorsModule { }
