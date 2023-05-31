import {Component, Input, OnInit} from '@angular/core';
import {INews} from "../../models/INews";
import {HttpService} from "../../services/http.service";
import {MatDialog} from "@angular/material/dialog";
import {NewNewsModalComponent} from "../../shared/new-news-modal/new-news-modal.component";
import {UpdateNewsModalComponent} from "../../shared/update-news-modal/update-news-modal.component";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit{
  @Input() news!: INews;

  time: Date;
  user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;

  userName: string | undefined;

  constructor(private httpService: HttpService, private dialogRef: MatDialog) {
    this.time = new Date()
    if (this.user) {
      this.userName = this.user.username;
    }
  }

  deleteNews() {
    this.httpService.delete("/api/v1/news/", this.news._id).subscribe();
    location.reload();
  }

  updateNews() {
    localStorage.setItem("currentNews", JSON.stringify(this.news));
    this.dialogRef.open(UpdateNewsModalComponent);
  }

  ngOnInit(): void {
    this.time = new Date(this.news.updatedAt as string)
  }
}
