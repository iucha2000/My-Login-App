import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {}

  addCard(card: Card) : Observable<any>
  {
    let httpOptions = 
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post<any>("http://localhost:5276/api/Cards/Add-Card",card,httpOptions);
  }

  // editCard(card: Card): Observable<any>
  // {


  // }

  deleteCard(id: number)
  {
    return this.httpClient.delete<any>(`http://localhost:5276/api/Cards/Delete-Card/${id}`);
  }

  getAllCards() : Observable<Card[]>
  {
    return this.httpClient.get<Card[]>("http://localhost:5276/api/Cards/Get-All-Cards");
  }
}
