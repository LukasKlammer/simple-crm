import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUsers = [];

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges( { idField: 'customIdName' } )
      .subscribe((changes: any) => {
        console.log('Received changes from DB', changes);
        this.allUsers = changes;
        console.log(this.allUsers);
      });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
