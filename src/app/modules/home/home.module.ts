import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CoreModule} from "@angular/flex-layout";
import {HomeRoutingModule} from "./home.routing";
import {AppMaterialModule} from "../../core/material/app-material.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppMaterialModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
