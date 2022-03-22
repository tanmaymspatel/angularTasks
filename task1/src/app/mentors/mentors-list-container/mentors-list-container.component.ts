import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentors } from '../mentors.model';
import { MentorsService } from '../mentors.service';

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

  deleteMentor(id: number){
    this._service.deleteMentors(id).subscribe(res=>{
      alert(`Mentor having id ${id} is deleted`);  
      this.mentorList$ = this._service.getMentorsData();  
    })
  }

}
