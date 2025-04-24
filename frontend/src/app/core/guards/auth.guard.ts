import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../auth/services/login/login.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return new Observable<boolean>((observer) => {
    loginService.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn === null) {
        return;
      }

      if (!loggedIn) {
        router.navigate(['/login']);
      }

      observer.next(loggedIn);
      observer.complete();
    });
  });
};
