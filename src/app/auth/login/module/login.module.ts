import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from '../login.component';
import {HeaderModule} from '../../../components/core/header/module/header.module';
import {LoginDataInformationModule} from '../components/login-data-information/module/login-data-information.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    LoginDataInformationModule,
  ]
})
export class LoginModule {
}
