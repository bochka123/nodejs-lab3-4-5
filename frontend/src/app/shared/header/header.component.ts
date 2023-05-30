import { Component } from '@angular/core';
import {LogInModalComponent} from "../log-in-modal/log-in-modal.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(
    private dialogRef: MatDialog
  ) {}

  openLogInModal() {
    this.dialogRef.open(LogInModalComponent)
  }
}
