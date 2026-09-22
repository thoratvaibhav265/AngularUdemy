import { Component, Input,input} from '@angular/core';
// './' ka matlab hai current folder (user folder) ke andar dekhna
import { DUMMY_USERS } from '../dummy_data/dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!:string;

  @Input({required: true}) name!:string;

  get imagePath(): string {
    return 'assets/images/users/' + this.avatar;
  }

  onSelectuser() {}
}
