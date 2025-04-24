import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthModel, Token } from '../../models/auth.model';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  isLoggedIn = new BehaviorSubject<boolean | null>(null);

  constructor() {
    this.autoLogin();
  }

  login(authModel: AuthModel) {
    return this.httpClient
      .post<Token>('http://127.0.0.1:8000/api/token/', authModel)
      .pipe(
        tap(() => {
          this.isLoggedIn.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.isLoggedIn.next(false);
  }

  autoLogin() {
    const access = localStorage.getItem('access');
    if (access) {
      this.httpClient
        .post('http://127.0.0.1:8000/api/token/verify/', {
          token: access,
        })
        .subscribe({
          next: () => {
            this.isLoggedIn.next(true);
          },
          error: () => {
            this.logout();
          },
        });
    } else {
      this.logout();
    }
  }
}
