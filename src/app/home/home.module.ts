import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";
import { SharedModule } from "../shared/shared.module";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {
}