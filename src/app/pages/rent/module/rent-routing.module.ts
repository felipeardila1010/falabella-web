import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RentComponent} from '../rent.component';

const routes: Routes = [
  {
    path: '',
    component: RentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule {
}
