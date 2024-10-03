import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {email: '', username: '', password: ''};

  registerForm = new FormGroup({
    emailField: new FormControl('', [Validators.required, Validators.email]),
    userNameField: new FormControl('',Validators.required),
    passwordfield: new FormControl('', Validators.required)
  })

  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
    if(this.registerForm.valid){
      
      this.user.email = this.registerForm.value.emailField ?? '';
      this.user.username = this.registerForm.value.userNameField ?? '';
      this.user.password = this.registerForm.value.passwordfield?? '';

      this.userService.getUser(this.user.username).subscribe(data => {
        if(data == null){
          this.userService.addUser(this.user).subscribe(() =>
            {
              alert("Registration successful!");
              this.router.navigate(['/login']);
            });
        }
        else
        {
          alert("User with given username already exists!");
        }
      });
    }
  }
}
