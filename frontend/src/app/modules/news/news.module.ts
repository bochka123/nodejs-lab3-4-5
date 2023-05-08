import {NewsPageComponent} from "./news-page/news-page.component";
import {NgModule} from "@angular/core";
import {NewsRoutingModule} from "./news-routing.module";

@NgModule({
  declarations: [NewsPageComponent],
  imports: [NewsRoutingModule],
})
export class NewsModule {}
