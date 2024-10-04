import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  username: string | null;

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router, private homeComponent: HomeComponent, private tokenService: TokenService){
    this.username = tokenService.getUsername();
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
