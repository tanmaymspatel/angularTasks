import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Mentors } from '../../model/mentors.model';

@Injectable()

export class MentorsFormPresenterService {

  private _mentorsFormData : Subject<Mentors>
  public mentorsFormData$ : Observable<Mentors>

  constructor(private _fb:FormBuilder) { 
    this._mentorsFormData = new Subject<Mentors>();
    this.mentorsFormData$ = this._mentorsFormData.asObservable();
  }


  // logic of reactive form
  buildForm(){
    return this._fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      gender:['',Validators.required],
      company:['',Validators.required],
      department:['',Validators.required],
      city:['',Validators.required],
      maritalStatus:['',Validators.required]
    })
  }

  onSubmit(mentorsForm : FormGroup){
    if (!mentorsForm.valid){
      return
    }
    this._mentorsFormData.next(mentorsForm.value);
  }
}
