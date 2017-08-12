import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchoPipe } from './echo.pipe';
import { BoxComponent } from "./components/box/box.component";

@NgModule({
  declarations: [
    BoxComponent,
    EchoPipe
  ],
  exports: [
    BoxComponent,
    CommonModule,
    EchoPipe
  ]
})
export class SharedModule {}