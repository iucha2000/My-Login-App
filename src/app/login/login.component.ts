import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <section>
      <h2 class="section-heading">Log in to your account</h2>
      <form [formGroup] = "loginForm" (ngSubmit)="onSubmit()">
        <label for="username">Username</label>
        <input id="username" type="text" formControlName="userNameField">

        <label for="password">Password</label>
        <input id="password" type="password" formControlName="passwordfield">
        <button class="primary" type="submit">Log in</button>
      </form>
    </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userNameField: new FormControl('',Validators.required),
    passwordfield: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
    if (this.loginForm.valid) {

        const usernameData = this.loginForm.value.userNameField;
        const passwordData = this.loginForm.value.passwordfield;

        if(usernameData && passwordData)
        {
          this.authService.LogIn(usernameData,passwordData);
          this.router.navigate(['/home']);
       }
    }
  }
}

//lazy loading
