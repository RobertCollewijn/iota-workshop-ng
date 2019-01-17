import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "../../modules/home/home.component";

const HOME = 'home';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: '../../modules/home/home.module#HomeModule',
  },
  {
    path: 'hello-world',
    loadChildren: '../../modules/hello-world/hello-world.module#HelloWorldModule',
  },
  {
    path: '',
    redirectTo: HOME,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: HOME,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
