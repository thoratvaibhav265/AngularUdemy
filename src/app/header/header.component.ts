import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    styleUrls: ['./header.style.css'],
})
export class HeaderComponent {
  title = 'My First App';
}