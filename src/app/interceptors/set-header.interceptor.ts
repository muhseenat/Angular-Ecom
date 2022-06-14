import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  constructor() {}
  token = localStorage.getItem('user_token');
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
   const newRequest= request.clone({
      setHeaders: {
        authorization: 'Bearer ' + this.token,
      },
    });
    return next.handle(newRequest);
  }
}
