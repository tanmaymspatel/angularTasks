import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category, user } from 'src/app/user/model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiLink: string = "";


  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }
  // get categories from json server
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiLink}/category`)
  }

  // on submit button save form values
  saveUser(user: user): Observable<user> {
    return this.http.post<user>(`${this.apiLink}/users/`, user);
  }

  // get data into the table
  getUserList(): Observable<user[]> {
    return this.http.get<user[]>(`${this.apiLink}/users/`);
  }

  getUserById(id: number): Observable<user> {
    return this.http.get<user>(`${this.apiLink}/users/${id}`);
  }

  editUser(user: user): Observable<user> {
    return this.http.put<user>(`${this.apiLink}/users/${user.id}`, user);
  }

  deleteUser(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/users/${id}`);
  }


}


