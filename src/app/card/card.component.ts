import { Component, Input } from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card; 
  
  constructor(private cardService: CardService, private homeComponent: HomeComponent){}

  deleteCard(){
    this.cardService.deleteCard(this.card.id).subscribe(() => 
      this.homeComponent.cards = this.homeComponent.cards.filter(card => card.id != this.card.id));
  }
}
