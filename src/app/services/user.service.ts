import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUser(user: User) : Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:5276/api/Users/Add-User",user);
  }

  getUser(username: string): Observable<User>
  {
    return this.httpClient.get<User>(`http://localhost:5276/api/Users/Get-User-By-Username/${username}`);
  }

  authenticateUser(login: Login) : Observable<Token>
  {
    return this.httpClient.post<Token>("http://localhost:5276/api/Authentication",login);
  }
}
