import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "../app.component";
import {NavigationModule} from "../shared/navigation/navigation.module";
import {AppRoutingModule} from "./routing/app-routing.module";
import {AppMaterialModule} from "./material/app-material.module";


export const COMPONENTS = [
  AppComponent
]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    NavigationModule,
  ],
  declarations: COMPONENTS,
  exports: [COMPONENTS],
})
export class AppCoreModule {
}
