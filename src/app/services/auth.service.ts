import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/login';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: Login = {username: '', password: ''}

  constructor(private cookieService: CookieService, private userService: UserService, private router: Router) { }

  LogIn(username: string, password: string)
  {
    this.login.username = username;
    this.login.password = password;

    this.userService.authenticateUser(this.login).subscribe(res => {
      this.cookieService.set('token',res.accessToken);
      this.router.navigate(['/home']);
    })
  }

  LogOut()
  {
    this.cookieService.delete('token');
  }

  IsAuthenticated(): boolean {
    return !!this.cookieService.get('token');
  }
}
