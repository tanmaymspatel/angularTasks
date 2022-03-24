import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()


export class FilterPrsenterService {

  constructor(private _fb:FormBuilder) { 
    
  }
  buildForm(){
    return this._fb.group({
      name:['',Validators.required],
      city:['',Validators.required],
      gender:['',Validators.required]
    })
  }
}
