import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mentors } from './mentors.model';

@Injectable()

export class MentorsService {

  public api:string ;

  constructor(private _http:HttpClient) {
    this.api = environment.baseURL;
   }
   
  //  get mentors data from the database
   public getMentorsData(): Observable<Mentors[]>{
     return this._http.get<Mentors[]>(`${this.api}/mentors`);
   }

// delete member id from database
   public deleteMentors(id:number) : Observable<number>{
    return this._http.delete<number>(`${this.api}/mentors/${id}`)
   }
}

