import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ParamsModel} from './enum/params.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Instance of the form group of the loginForm
  public loginForm: FormGroup = new FormGroup({
    rut: new FormControl('', [Validators.required]),
    cellphone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  // Flag is active of the submit
  public isSubmit: boolean;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  /**
   * Event emitter of the on submit of the form
   * @void
   */
  public onSubmit(): void {
    this.isSubmit = true;
    if (this.loginForm.valid) {
      console.log('pass form');

      const params: ParamsModel = {
        rut: this.loginForm.controls.rut.value,
        cellphone: this.loginForm.controls.cellphone.value,
        email: this.loginForm.controls.email.value
      };
      this.router.navigate(['/renta'], {queryParams: params});
    } else {
      console.warn('LoginForm: Data not valid');
    }
  }
}
