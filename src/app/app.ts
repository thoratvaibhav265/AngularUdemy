
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',  
    standalone: true,
    styleUrls: ['./app.css'],
    imports: [HeaderComponent,User]
})
export class App{

}