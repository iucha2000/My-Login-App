import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  url = `${window.location.protocol}//${window.location.hostname}:3000/cards`; 

  constructor() {console.log(this.url)}

  async getAllCards() : Promise<Card[]>
  {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCardById(id: number): Promise<Card>
  {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
