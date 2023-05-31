import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.sass']
})
export class LogInModalComponent {
  constructor(private httpService: HttpService) {
  }

  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });


  logIn() {
    const user: any  = {
      username: this.form.controls.login.value,
      password: this.form.controls.password.value
    };
    this.httpService.post<any>("/api/v1/admin/login", user).subscribe((user) => {
      localStorage.setItem("user", JSON.stringify(user.data.admin));
      location.reload();
    });
  }
}
