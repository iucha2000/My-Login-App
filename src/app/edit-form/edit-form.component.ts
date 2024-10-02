import { Component} from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  currentCard!: Card
  cardId!: number

  constructor(private cardService: CardService, private cookieService: CookieService, private homeComponent: HomeComponent){

    this.currentCard = {id: 0, title: '', description: '', author: '', createDate: '', status: ''}

    this.cardId = Number(this.cookieService.get('cardId'));
    if(this.cardId != 0)
    {
      this.cardService.getCardById(this.cardId).subscribe(data => {
        this.currentCard = data;
      });
    }
  }

  applyUpdate(){
    if(this.cardId != 0)
    {
      this.cardService.editCard(this.cardId, this.currentCard).subscribe(() => 
        {
          this.homeComponent.ngOnInit();
          this.homeComponent.editMode = false;
        });
    }
    else
    {
      this.cardService.addCard(this.currentCard).subscribe(() => 
        {
          this.homeComponent.ngOnInit();
          this.homeComponent.editMode = false;
        });
    }
  }

  cancelUpdate(){
    this.homeComponent.editMode = false;
  }
}
