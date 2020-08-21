import {Injectable} from '@angular/core';
import {SaveDataRequestModel} from '../enum/service.enum';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  // http headers
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  /**
   * Save data in the backend
   * @return Promise<Array<SaveDataRequestModel>>
   */
  public saveData(request: SaveDataRequestModel): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      console.log('request saveData', request);
      this.http.post(
        environment.http.saveData,
        request,
        {headers: this.headers}
      ).toPromise()
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
