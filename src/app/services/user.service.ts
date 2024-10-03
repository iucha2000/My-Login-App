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

  authenticateUser(login: Login) : Observable<Token>
  {
    let httpOptions = 
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post<Token>("http://localhost:5276/api/Authentication",login,httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          alert("Invalid credentials");
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    );
  }
}
