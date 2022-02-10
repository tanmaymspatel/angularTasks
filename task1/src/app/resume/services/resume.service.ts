import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  apiLink: string;

  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
   }

  //  sent data to database on submit  
  saveData(resume: Resume): Observable<Resume>{
    return this.http.post<Resume>(`${this.apiLink}/resume/`, resume);
  }

  // get data from json server
  getResumeData() : Observable<Resume>{
    return this.http.get<Resume>(`${this.apiLink}/resume/1`)
  }


  }



