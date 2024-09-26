import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <div class="cards-container">
      <app-card *ngFor="let card of cards" [card] = "card"></app-card>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards: Card[] = [];

  constructor(private cardService: CardService){}
  
  ngOnInit() {
    this.cardService.getAllCards().then((cardsList: Card[]) => {
      this.cards = this.getRandomCards(cardsList, 3);
    });
  }

  getRandomCards(cards: Card[], num: number): Card[] {
    if (num > cards.length) {
      num = cards.length; 
    }
    const shuffled = cards.sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, num); 
  }

}
