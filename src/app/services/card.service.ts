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

  constructor(private httpClient: HttpClient) {}

  addCard(card: Card) : Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:5276/api/Cards/Add-Card",card);
  }

  editCard(id: number, card: Card)
  {
    return this.httpClient.put<any>(`http://localhost:5276/api/Cards/Edit-Card/${id}`,card);
  }

  deleteCard(id: number)
  {
    return this.httpClient.delete<any>(`http://localhost:5276/api/Cards/Delete-Card/${id}`);
  }

  getAllCards() : Observable<Card[]>
  {
    return this.httpClient.get<Card[]>("http://localhost:5276/api/Cards/Get-All-Cards");
  }

  getCardById(id: number): Observable<Card>
  {
    return this.httpClient.get<Card>(`http://localhost:5276/api/Cards/Get-Card-By-Id/${id}`);
  }
}
