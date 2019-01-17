import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {FlexLayoutModule} from "@angular/flex-layout";

import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ExampleDialogComponent} from "./toolbar/example-dialog/example-dialog.component";
import {AppMaterialModule} from "../../core/material/app-material.module";



const COMPONENTS = [
  SidenavComponent,
  ToolbarComponent,
  ExampleDialogComponent,
 ]

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: [
    ExampleDialogComponent
  ]
})
export class NavigationModule {
}
