import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "@angular/flex-layout";
import {AppMaterialModule} from "../../core/material/app-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HelloWorldComponent
  }
];

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppMaterialModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HelloWorldModule {
}
