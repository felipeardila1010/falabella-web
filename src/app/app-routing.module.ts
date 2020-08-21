import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/login/module/login.module').then(m => m.LoginModule)
  },
  {
    path: 'renta',
    loadChildren: () => import('./pages/rent/module/rent.module').then(m => m.RentModule)
  },
  {path: ``, redirectTo: ``, pathMatch: `full`}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
