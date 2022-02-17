import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Client, Office, User2 } from '../models/user2';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  apiLink: string;
  
  constructor(private http : HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // get client names from json server
  getClientName(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiLink}/clientname`)
  }
  // get ofice from json server
  getOfiice(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.apiLink}/office`)
  }

  // on save button save form data
  saveUser(user: User2): Observable<User2> {
    return this.http.post<User2>(`${this.apiLink}/userdata/`, user);
  }

  // get user data into the table
  getUserDataList(): Observable<User2[]> {
    return this.http.get<User2[]>(`${this.apiLink}/userdata`);
  }

  // fetch data by id
  getUserById(id: number): Observable<User2> {
    return this.http.get<User2>(`${this.apiLink}/userdata/${id}`);
  }

  // edit the user data
  editUser(id:number ,user: User2): Observable<User2[]> {
    return this.http.put<User2[]>(`${this.apiLink}/userdata/${id}`, user);
  }

  // delete the user from data
  deleteUser(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/userdata/${id}`);
  }
}
