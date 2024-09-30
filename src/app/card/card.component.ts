import { Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;    

  deleteCard(){
    alert(`"Card ${this.card.id} deleted"`)
  }
}
