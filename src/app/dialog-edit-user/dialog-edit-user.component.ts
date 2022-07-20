import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../modules/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User = new User();
  userId: string = '';
  birthday: Date = new Date();
  isLoading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthday = this.birthday.getTime();
    console.log('Current user is', this.user)
    this.isLoading = true;

    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .update(this.user.toJSON())
        .then((result: any) => {
          console.log('changing user finished: ', result);
          this.isLoading = false;
          this.dialogRef.close();
        })
    }
  }

}


