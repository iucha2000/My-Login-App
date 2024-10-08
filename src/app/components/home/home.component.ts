import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards: Card[] = [];
  editMode: boolean
  addUserMode: boolean

  constructor(private cardService: CardService, private tokenService: TokenService)
  {
    this.editMode = false
    this.addUserMode = false
  }
  
  ngOnInit() {
    this.cardService.getAllCards().subscribe(data => {
      this.cards = data
      //.filter(card => card.author == this.tokenService.getUsername());
      console.log(this.cards)
    });
  }
}
