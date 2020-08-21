import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {detect} from 'detect-browser';

const browser = detect();

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'x-user-browser': `${browser.name} ${browser.version}`,
        'x-user-os': browser.os
      }
    });

    console.log('add headers in the interceptor', request);

    return next.handle(request);
  }
}
