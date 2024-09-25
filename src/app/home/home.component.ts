import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <div class="cards-container">
      <app-card 
        *ngFor="let card of cards" 
        [title]="card.title" 
        [content]="card.content">
      </app-card>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    { title: 'Card 1', content: 'This is the content of Card 1.' },
    { title: 'Card 2', content: 'This is the content of Card 2.' },
    { title: 'Card 3', content: 'This is the content of Card 3.' },
    // { title: 'Card 4', content: 'This is the content of Card 4.' },
    // { title: 'Card 5', content: 'This is the content of Card 5.' },
    // { title: 'Card 6', content: 'This is the content of Card 6.' }
  ];
}
