import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  username: string | null;

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router, private homeComponent: HomeComponent){
    let token = this.cookieService.get('token')
    let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
    this.username = decodedJWT.username;
  }

  AddCard()
  {
    this.cookieService.delete('cardId');
    this.homeComponent.editMode = true;
  }

  LogOut() 
  {
    this.authService.LogOut();
    this.router.navigate(['']);
  }
}
