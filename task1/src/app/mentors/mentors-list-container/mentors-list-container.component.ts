import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MentorsService } from '../mentors.service';
import { Mentors } from '../model/mentors.model';

@Component({
  selector: 'app-mentors-list-container',
  templateUrl: './mentors-list-container.component.html',
  styleUrls: ['./mentors-list-container.component.scss']
})
export class MentorsListContainerComponent implements OnInit {

  public mentorList$ : Observable<Mentors[]>

  constructor(private _service:MentorsService) { 

    this.mentorList$ = new Observable();

  }

  ngOnInit(): void {
    this.mentorList$ = this._service.getMentorsData();
  }

  // delete member service call 
  deleteMentor(id: number){
    this._service.deleteMentors(id).subscribe(res=>{
      alert(`Mentor having id ${id} is deleted`);  
      this.mentorList$ = this._service.getMentorsData();  
    })
  }

}
