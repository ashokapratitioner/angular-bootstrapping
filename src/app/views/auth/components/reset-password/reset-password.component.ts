import { Component } from '@angular/core';
import { LoginLinkComponent } from '../shared/login-link.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginLinkComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {}
