import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  template: `
    <h1>Welcome, {{ username }}!</h1>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string | null;

  constructor(private cookieService: CookieService){
    this.username = this.cookieService.get('username') || null;
  }
}
