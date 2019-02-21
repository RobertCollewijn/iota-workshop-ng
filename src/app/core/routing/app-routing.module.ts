import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
    path: 'tokens',
    loadChildren: '../../modules/tokens/tokens.module#TokensModule',
  },
  {
    path: 'zmq',
    loadChildren: '../../modules/zmq/zmq.module#ZmqModule',
  },
  {
    path: 'mam',
    loadChildren: '../../modules/mam/mam.module#MamModule',
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
