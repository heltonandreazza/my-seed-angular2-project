import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BodyComponent } from "./core/body/body.component";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}