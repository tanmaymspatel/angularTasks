import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectData } from '../model/subject.model';

@Injectable()
export class SubjectService {

  public userData : Subject<SubjectData>;
  public editData : Subject<SubjectData>;

  constructor() { 
    this.userData = new Subject<SubjectData>();
    this.editData = new Subject<SubjectData>();
  }
}
