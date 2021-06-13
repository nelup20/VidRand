import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    IndexComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
