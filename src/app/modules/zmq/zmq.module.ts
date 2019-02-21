import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZmqComponent } from './zmq.component';
import {AppMaterialModule} from '../../core/material/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: ZmqComponent
}
]

@NgModule({
  declarations: [ZmqComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ZmqModule { }
