import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (request, next): Observable<any> => {
  const authService = inject(AuthService); // Use `inject()` instead of constructor injection
  const noAuthRequests = [
    'introSlides',
    'introSlides2'
  ]; // Example excluded requests

  const requestPath: string = request.url.substring(request.url.lastIndexOf('/') + 1);
  if (!noAuthRequests.includes(requestPath)) {
    return from(authService.getIDToken()).pipe(
      switchMap((token) => {
        const reqClone = request.clone({
          setHeaders: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        });
        return next(reqClone);
      })
    );
  } else {
    const reqClone = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next(reqClone);
  }
};
