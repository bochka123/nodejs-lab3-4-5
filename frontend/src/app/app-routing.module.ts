import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from "./components/news-page/news-page.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
