import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()

export class MentorsListPresenterService {

  public delete$ : Observable<number>
  private _delete : Subject<number>

  constructor() {
    this._delete = new Subject<number>();
    this.delete$ = new Observable<number>();

    this.delete$ = this._delete.asObservable();
   }

   public onDelete(id: number){
    //  console.log(id);
     this._delete.next(id);
   }


}
