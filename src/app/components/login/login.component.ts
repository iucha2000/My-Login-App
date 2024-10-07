import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userNameField: new FormControl('',Validators.required),
    passwordfield: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService){}

  onSubmit() {
    if (this.loginForm.valid) {
      const usernameData = this.loginForm.value.userNameField ?? '';
      const passwordData = this.loginForm.value.passwordfield ?? '';

      if(usernameData && passwordData)
      {
        this.authService.LogIn(usernameData,passwordData);
      }
    }
  }
}
