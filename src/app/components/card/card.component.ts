import { Component, Input} from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { HomeComponent } from '../home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card; 
  
  constructor(private cardService: CardService, private homeComponent: HomeComponent, private cookieService: CookieService, private tokenService: TokenService){}

  deleteCard(){
    if(this.card.author == this.tokenService.getUsername() || this.tokenService.getRole() == "Admin")
    {
      this.cardService.deleteCard(this.card.id).subscribe(() => 
        this.homeComponent.cards = this.homeComponent.cards.filter(card => card.id != this.card.id));
    }
    else
    {
      alert("You have no permission to delete other user's card")
    }
  }

  editCard(){
    if(this.card.author == this.tokenService.getUsername() || this.tokenService.getRole() == "Admin")
    {
      this.cookieService.set('cardId', this.card.id.toString());
      this.homeComponent.editMode = true;
    }
    else
    {
      alert("You have no permission to edit other user's card")
    }
  }
}
