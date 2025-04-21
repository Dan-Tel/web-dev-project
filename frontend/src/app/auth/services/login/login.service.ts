import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthModel, Token } from '../../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);

  isLoggedIn = new BehaviorSubject<boolean | null>(null);

  constructor() {
    this.autoLogin();
  }

  login(authModel: AuthModel) {
    return this.httpClient.post<Token>(
      'http://127.0.0.1:8000/api/token/',
      authModel
    );
  }

  autoLogin() {
    const access = localStorage.getItem('access');
    if (access) {
      this.httpClient
        .post('http://127.0.0.1:8000/api/token/verify/', {
          token: access,
        })
        .subscribe(() => this.router.navigate(['/genres']));
    }
  }
}
