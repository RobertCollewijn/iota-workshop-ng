import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MamComponent} from './mam.component';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from '../../core/material/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MamComponent
  }
];

@NgModule({
  declarations: [MamComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MamModule {
}
