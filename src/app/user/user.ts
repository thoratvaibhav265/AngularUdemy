import { Component } from '@angular/core';
// './' ka matlab hai current folder (user folder) ke andar dekhna
import { DUMMY_USERS } from '../dummy_data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser=DUMMY_USERS[randomIndex];

  get imagePath(){
    return 'assets/images/users/' + this.selectedUser.avatar;
  }
}
