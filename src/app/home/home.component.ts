import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards: Card[] = [];
  editMode: boolean

  constructor(private cardService: CardService){this.editMode = false}
  
  ngOnInit() {
    this.cardService.getAllCards().subscribe(data => {
      this.cards = data;
      console.log(this.cards)
    });
  }
}
