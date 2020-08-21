import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RentComponent} from '../rent.component';
import {RentRoutingModule} from './rent-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderModule} from '../../../components/core/header/module/header.module';
import {RentService} from '../service/rent.service';

@NgModule({
  declarations: [
    RentComponent
  ],
  imports: [
    CommonModule,
    RentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  providers: [
    RentService
  ]
})
export class RentModule {
}
