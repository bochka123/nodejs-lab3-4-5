import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {INews} from "../../models/INews";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-new-news-modal',
  templateUrl: './new-news-modal.component.html',
  styleUrls: ['./new-news-modal.component.sass']
})
export class NewNewsModalComponent {

  constructor(private httpService: HttpService) {
  }
  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    category: new FormControl('')
  });

  addNews() {
    const createdBy: string = JSON.parse(localStorage.getItem("user") as string).username;
    const news: INews = {
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
      category: this.form.controls.category.value?.toLowerCase(),
      createdBy: createdBy
    };
    this.httpService.post<INews>("/api/v1/news", news).subscribe();
    location.reload();
  }
}
