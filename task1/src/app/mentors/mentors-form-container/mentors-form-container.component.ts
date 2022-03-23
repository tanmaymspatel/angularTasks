import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Mentors, MentorsForm } from '../mentors.model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors-form-container',
  templateUrl: './mentors-form-container.component.html',
  styleUrls: ['./mentors-form-container.component.scss']
})
export class MentorsFormContainerComponent implements OnInit {

  public id: string;
  public mentorsData$ : Observable<Mentors> ;  

  constructor(private _mentorService: MentorsService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    // console.log(this._activatedRoute);

    // fetch id from the url
    this.id = this._activatedRoute.snapshot.params['id'];
    // console.log(this.id);
    if(this.id){
      this.mentorsData$ = this._mentorService.getMemntorById(this.id)
    }
    
   }

  ngOnInit(): void {
  }


  // add mentor data to the database
  addMentor(formValue: MentorsForm) {
    this._mentorService.addMentor(formValue).subscribe(res => {
      console.log(res);
      alert("Mentor is added");
      this._router.navigateByUrl("/mvp/list");
    })
  }

  editMentor(data : MentorsForm){
    this._mentorService.editMentor(this.id, data).subscribe(res=>{
      alert(`data of ${this.id} is edited`);
      this._router.navigateByUrl('/mvp/list');
    })
  }
}
