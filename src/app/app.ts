
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.html',  
    standalone: true,
    imports: [HeaderComponent]
})
export class App{

}