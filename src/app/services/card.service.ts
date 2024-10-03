import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router) {}

  addCard(card: Card) : Observable<any>
  {
    let token = this.cookieService.get('token');
    let httpOptions = 
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.httpClient.post<any>("http://localhost:5276/api/Cards/Add-Card",card,httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    );
  }

  editCard(id: number, card: Card)
  {
    let token = this.cookieService.get('token');
    let httpOptions = 
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.httpClient.put<any>(`http://localhost:5276/api/Cards/Edit-Card/${id}`,card,httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    );
  }

  deleteCard(id: number)
  {
    let token = this.cookieService.get('token');
    let httpOptions = 
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.httpClient.delete<any>(`http://localhost:5276/api/Cards/Delete-Card/${id}`,httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    );
  }

  getAllCards() : Observable<Card[]>
  {
    let token = this.cookieService.get('token');
    let httpOptions = 
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.httpClient.get<Card[]>("http://localhost:5276/api/Cards/Get-All-Cards",httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    )
  }

  getCardById(id: number): Observable<Card>
  {
    let token = this.cookieService.get('token');
    let httpOptions = 
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.httpClient.get<Card>(`http://localhost:5276/api/Cards/Get-Card-By-Id/${id}`,httpOptions).pipe(
      catchError(error => {
        if(error.status == 401)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          alert(error.error)
        }
        return throwError(() => error);
      })
    )
  }
}
