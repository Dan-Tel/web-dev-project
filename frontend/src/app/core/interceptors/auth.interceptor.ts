import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authToken = localStorage.getItem('access');

  if (authToken) {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next(newReq).pipe(
      catchError((e) => {
        if (e.status == 401) {
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          router.navigate(['/login']);
        }

        return EMPTY;
      })
    );
  }

  return next(req);
};
