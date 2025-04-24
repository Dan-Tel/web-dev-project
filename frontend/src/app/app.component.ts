import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './auth/services/login/login.service';
import { LogoutBtnComponent } from './core/components/logout-btn/logout-btn.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoutBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly loginService = inject(LoginService);
  title = 'frontend';
}
