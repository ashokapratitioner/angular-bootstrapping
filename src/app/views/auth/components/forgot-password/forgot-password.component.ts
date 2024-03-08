import { Component } from '@angular/core';
import { LoginLinkComponent } from '../shared/login-link.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  imports: [LoginLinkComponent],
  standalone: true,
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {}
