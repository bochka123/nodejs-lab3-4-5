import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.sass']
})
export class SignUpModalComponent {
  constructor(private httpService: HttpService) {
  }

  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl('')
  });

  signUp() {
    const user: any  = {
      username: this.form.controls.login.value,
      password: this.form.controls.password.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value
    };
    this.httpService.post<IUser>("/api/v1/admin/register", user).subscribe();
  }
}
