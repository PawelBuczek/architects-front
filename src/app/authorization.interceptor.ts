import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationHeader = localStorage.getItem('authorizationHeader');
    if (authorizationHeader !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: authorizationHeader
        }
      });
    }
    return next.handle(request);
  }
}
