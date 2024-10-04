import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private decodedJWT: any;

  constructor(private cookieService: CookieService) 
  { 
    this.decodeToken();
  }

  private decodeToken(): void {
    let token = this.cookieService.get('token');
    if (token) {
      this.decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
    } else {
      this.decodedJWT = null;
    }
  }

  getUsername(): string {
    return this.decodedJWT.username;
  }

  getPassword(): string {
    return this.decodedJWT.password;
  }

}
