import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {INews} from "../../models/INews";

@Component({
  selector: 'app-update-news-modal',
  templateUrl: './update-news-modal.component.html',
  styleUrls: ['./update-news-modal.component.sass']
})
export class UpdateNewsModalComponent {
  constructor(private httpService: HttpService) {
  }
  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    category: new FormControl('')
  });

  updateNews() {
    const news = JSON.parse(localStorage.getItem("currentNews") as string);
    const sendNews = {
      ...news,
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
      category: this.form.controls.category.value?.toLowerCase()
    };
    this.httpService.update<any>(`/api/v1/news/${sendNews._id}`, sendNews).subscribe(() => {
      location.reload();
    });

  }
}
