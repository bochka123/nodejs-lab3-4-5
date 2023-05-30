import {Component, Input} from '@angular/core';
import {INews} from "../../models/INews";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  @Input() news!: INews;

  constructor(private httpService: HttpService) {
  }

  deleteNews() {
    this.httpService.delete("/api/v1/news/", this.news._id).subscribe();
    location.reload();
  }
}
