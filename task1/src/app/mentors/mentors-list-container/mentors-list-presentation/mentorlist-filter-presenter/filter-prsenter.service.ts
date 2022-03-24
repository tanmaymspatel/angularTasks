import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Filterform } from 'src/app/mentors/model/mentors.model';

@Injectable()


export class FilterPrsenterService {

  private filterFormData : Subject<Filterform>;
  public filterFormData$ : Observable<Filterform>

  constructor(private _fb:FormBuilder) { 

    this.filterFormData = new Subject<Filterform>();
    this.filterFormData$ = new Observable<Filterform>();

    this.filterFormData$ = this.filterFormData.asObservable();
    
  }
  buildForm(){
    return this._fb.group({
      name:[''],
      city:[''],
      gender:['']
    })
  }

  onFilter(filterFormData:FormGroup){
    this.filterFormData.next(filterFormData.value);
  }
}
