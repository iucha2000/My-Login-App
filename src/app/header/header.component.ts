import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class = header>
      <div class = h1-container>
        <h1>Welcome, {{ username }}!</h1>
      </div>
      <div class = "button-container">
        <button class="primary" type="button" (click)="LogOut()">Log out</button>
      </div>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  username: string | null;

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router){
    this.username = this.cookieService.get('username') || null;
  }

  LogOut() 
  {
    this.authService.LogOut();
    this.router.navigate(['']);
  }
}
