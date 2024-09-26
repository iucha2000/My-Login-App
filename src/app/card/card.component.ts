import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  template: `
     <div class="card">
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <p><strong>Author:</strong> {{ card.author }}</p>
      <p><strong>Date:</strong> {{ card.date | date:'mediumDate' }}</p>
      <p><strong>Status:</strong> {{ card.status }}</p>
    </div>
  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;    
}
