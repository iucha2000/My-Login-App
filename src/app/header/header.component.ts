import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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
