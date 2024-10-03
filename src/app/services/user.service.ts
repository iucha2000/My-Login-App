import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUser(user: User) : Observable<any>
  {
    let httpOptions = 
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post<any>("http://localhost:5276/api/Users/Add-User",user,httpOptions);
  }

  getUser(username: string): Observable<User>
  {
    return this.httpClient.get<User>(`http://localhost:5276/api/Users/Get-User-By-Username/${username}`);
  }
}
