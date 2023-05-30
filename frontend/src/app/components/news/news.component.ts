import {Component, Input} from '@angular/core';
import {INews} from "../../models/INews";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  @Input() news!: INews;
}
