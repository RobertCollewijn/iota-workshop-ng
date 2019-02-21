import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensComponent} from './tokens.component';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from '../../core/material/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: TokensComponent
  }
];

@NgModule({
  declarations: [TokensComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TokensModule {
}
