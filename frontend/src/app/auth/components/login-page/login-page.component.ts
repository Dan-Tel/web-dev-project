import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { AuthModel } from '../../models/auth.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  authModel: AuthModel = {
    username: '',
    password: '',
  };

  login() {
    this.loginService.login(this.authModel).subscribe(
      (token) => {
        localStorage.setItem('access', token.access);
        localStorage.setItem('refresh', token.refresh);
        this.router.navigate(['/genres']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
