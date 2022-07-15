import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthday: Date = new Date();

  constructor() {

   }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthday = this.birthday.getTime();
    console.log('Current user is', this.user)
  }

}
