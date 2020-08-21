import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  // Instance of the form group of the loginForm
  public rentForm: FormGroup = new FormGroup({
    rent: new FormControl('', [Validators.required])
  });
  // Flag is active of the submit
  public isSubmit: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Event emitter of the on submit of the form
   * @void
   */
  public onSubmit(): void {
    this.isSubmit = true;
    if (this.rentForm.valid) {
      console.log('pass form');

    } else {
      console.warn('RentForm: Data not valid');
    }
  }
}
