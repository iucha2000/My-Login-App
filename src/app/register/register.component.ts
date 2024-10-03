import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    emailField: new FormControl('', [Validators.required, Validators.email]),
    userNameField: new FormControl('',Validators.required),
    passwordfield: new FormControl('', Validators.required)
  })

  // constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
    if(this.registerForm.valid){
      alert("Registration successful!");
      //register user in database
    }
  }
}
