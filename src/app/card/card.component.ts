import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';    
  @Input() content: string = '';
}
