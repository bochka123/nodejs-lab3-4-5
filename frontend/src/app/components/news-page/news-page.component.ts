import {Component, OnInit} from '@angular/core';
import {INews} from "../../models/INews";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }
  news: INews[] | undefined;
  ngOnInit(): void {
    this.httpService.get<INews[]>("/api/v1/news").subscribe((news) => {
      this.news = news;
    })
  }

}
