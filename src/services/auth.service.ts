import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  LogIn(username: string, password: string)
  {
    this.cookieService.set('username', username);
    this.cookieService.set('password', password);
  }

  LogOut()
  {
    this.cookieService.delete('username');
    this.cookieService.delete('password');
  }

  IsAuthenticated(): boolean {
    return !!this.cookieService.get('username');
  }
}
