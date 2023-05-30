import { Component } from '@angular/core';
import {LogInModalComponent} from "../log-in-modal/log-in-modal.component";
import {MatDialog} from '@angular/material/dialog';
import {SignUpModalComponent} from "../sign-up-modal/sign-up-modal.component";
import {NewNewsModalComponent} from "../new-news-modal/new-news-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  userIn: boolean = true;
  constructor(
    private dialogRef: MatDialog
  ) {}

  openLogInModal() {
    this.dialogRef.open(LogInModalComponent)
  }

  openSignUpModal() {
    this.dialogRef.open(SignUpModalComponent)
  }

  openNewNewsModal() {
    this.dialogRef.open(NewNewsModalComponent)
  }
}
