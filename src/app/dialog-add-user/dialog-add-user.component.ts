import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthday: Date = new Date();
  isLoading: boolean = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthday = this.birthday.getTime();
    console.log('Current user is', this.user)
    this.isLoading = true;

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('Adding user finished: ', result);
        this.isLoading = false;
        this.dialogRef.close();
      })
  }

}
