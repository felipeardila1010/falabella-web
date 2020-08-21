import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RentService} from './service/rent.service';
import {SaveDataRequestModel} from './enum/service.enum';
import {ParamsModel} from '../../auth/login/enum/params.enum';

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
  // Params of the page
  public params: ParamsModel;
  // Message of response
  public messageResponse: string;

  constructor(
    private route: ActivatedRoute,
    private rentService: RentService
  ) {
  }

  async ngOnInit() {
    this.params = await this.getParams();
    console.log('params of the page', this.params);
  }

  /**
   * Event emitter of the on submit of the form
   * @void
   */
  public onSubmit(): void {
    this.isSubmit = true;
    if (this.rentForm.valid) {
      console.log('pass form');

      const requestSaveData: SaveDataRequestModel = {
        rut: this.params.rut,
        cellphone: this.params.cellphone,
        email: this.params.email,
        rent: this.rentForm.controls.rent.value
      };
      this.rentService.saveData(requestSaveData)
        .then(response => {
          console.log('response service', response);
          this.messageResponse = `Guardado Exitoso`;
        })
        .catch(error => {
          console.error('error response service', error);

          this.messageResponse = `¡Ups! tenemos un error ${error.message}`;
        });
    } else {
      console.warn('RentForm: Data not valid');
    }
  }

  /**
   * Get params of the page
   * @return Promise<object>
   */
  private getParams(): Promise<any> {
    return new Promise(resolve => {
      this.route.queryParams.subscribe(params => {
        resolve(params);
      });
    });
  }
}
