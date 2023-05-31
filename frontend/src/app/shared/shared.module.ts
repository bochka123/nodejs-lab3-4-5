import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { NewNewsModalComponent } from './new-news-modal/new-news-modal.component';
import { LogInModalComponent } from './log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateNewsModalComponent } from './update-news-modal/update-news-modal.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NewNewsModalComponent,
    LogInModalComponent,
    SignUpModalComponent,
    UpdateNewsModalComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LogInModalComponent,
    SignUpModalComponent,
    NewNewsModalComponent
  ],
})
export class SharedModule {}
