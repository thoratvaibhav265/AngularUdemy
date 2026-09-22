import { Component, Input,input,computed, Output, EventEmitter} from '@angular/core';
// './' ka matlab hai current folder (user folder) ke andar dekhna
import { DUMMY_USERS } from '../dummy_data/dummy-users';

type User={
  id: string; name: string; avatar: string 
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();

//   avatar=input<string>;
//   name=input<string>;
//   imagePath=computed(( ) => {
//     return 'assets/images/users/' + this.avatar;
// });

  get imagePath(): string {
    return 'assets/images/users/'+ this.user.avatar;
  }

  onSelectuser() {
    this.select.emit(this.user.id);
  }
}
