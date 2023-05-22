import {NewsPageComponent} from "./news-page/news-page.component";
import {NgModule} from "@angular/core";
import {NewsRoutingModule} from "./news-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [NewsPageComponent],
  imports: [NewsRoutingModule, SharedModule],
})
export class NewsModule {}
