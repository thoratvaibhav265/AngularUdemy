
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {  UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy_data/dummy-users';
import { Task } from './task/task';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',  
    standalone: true,
    styleUrls: ['./app.css'],
    imports: [HeaderComponent, UserComponent, Task]
})
export class App{

     users = DUMMY_USERS;
     selectedUserId: string | null = null;

     get selectedUser(){
        return this.users.find(user => user.id === this.selectedUserId);
     }
     
     onUserSelected(userId: string) {
        this.selectedUserId = userId;
     }
}