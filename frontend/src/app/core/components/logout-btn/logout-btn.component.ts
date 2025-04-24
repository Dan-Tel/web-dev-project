import { Component, inject } from '@angular/core';
import { LoginService } from '../../../auth/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-btn',
  imports: [],
  templateUrl: './logout-btn.component.html',
  styleUrl: './logout-btn.component.css'
})
export class LogoutBtnComponent {
  private readonly router = inject(Router);
  private readonly loginService = inject(LoginService);

  onClick() {
    this.router.navigate(['/login']);
    this.loginService.logout();
  }
}
