import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  newUser: User = {email: '', username: '', password: '', role: 0}

  constructor(private homeComponent: HomeComponent, private userService: UserService){}

  applyAddUser()
  {
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

  cancelAddUser()
  {
    this.homeComponent.addUserMode = false;
  }

}
