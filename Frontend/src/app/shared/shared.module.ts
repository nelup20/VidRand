import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { BackButtonComponent } from './back-button/back-button.component';



@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    BackButtonComponent
  ]
})
export class SharedModule { }
