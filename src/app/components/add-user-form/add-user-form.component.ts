import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  newUser: User = {email: '', username: '', password: '', role: 0}

  addUserForm = new FormGroup({
    emailField: new FormControl('', [Validators.required, Validators.email]),
    userNameField: new FormControl('',Validators.required),
    passwordfield: new FormControl('', Validators.required),
    rolefield: new FormControl('', Validators.required)
  })

  constructor(private homeComponent: HomeComponent, private userService: UserService){}

  applyAddUser()
  {
    if(this.addUserForm.valid)
    {
      this.newUser.email = this.addUserForm.value.emailField ?? '';
      this.newUser.username = this.addUserForm.value.userNameField ?? '';
      this.newUser.password = this.addUserForm.value.passwordfield?? '';
      this.newUser.role = parseInt(this.addUserForm.value.rolefield?? '0',10)

      this.userService.getUser(this.newUser.username).subscribe(data => {
        if(data == null){
          this.userService.addUser(this.newUser).subscribe(() => {
            alert("User added successfully!");
            this.cancelAddUser();
          });
        }
        else{
          alert("User with given username already exists")
        }
      })
    }
    else
    {
      alert("Please fill all fields in required format");
    }
  }

  cancelAddUser()
  {
    this.homeComponent.addUserMode = false;
  }

}
