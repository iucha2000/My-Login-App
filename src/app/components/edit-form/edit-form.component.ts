import { Component} from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from '../home/home.component';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  currentCard: Card = {id: 0, title: '', description: '', author: '', createDate: '', status: ''}
  cardId!: number

  constructor(private cardService: CardService, private cookieService: CookieService, private homeComponent: HomeComponent, private tokenService: TokenService){

    this.cardId = Number(this.cookieService.get('cardId'));
    if(this.cardId != 0)
    {
      this.cardService.getCardById(this.cardId).subscribe(data => {
        this.currentCard = data;
      });
    }
    else
    {
      this.currentCard.author = tokenService.getUsername();
    }
  }

  applyUpdate(){
    if(this.cardId != 0)
    {
      this.cardService.editCard(this.cardId, this.currentCard).subscribe(() => 
        {
          this.homeComponent.ngOnInit();
          this.cancelUpdate();
        });
    }
    else
    {
      this.cardService.addCard(this.currentCard).subscribe(() => 
        {
          this.homeComponent.ngOnInit();
          this.cancelUpdate();
        });
    }
  }

  cancelUpdate(){
    this.cookieService.delete('cardId')
    this.homeComponent.editMode = false;
  }
}
