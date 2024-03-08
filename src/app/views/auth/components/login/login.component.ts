import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimation } from '../../../../shared/animations/animations';
import { TokenService } from '../../services/auth/token.service';
import * as sample from './sample.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule],
  animations: [fadeInOutAnimation],
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('login');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm?.get('username')?.value;
      const password = this.loginForm?.get('password')?.value;
      this.tokenService.login({ username, password }).subscribe((result) => {
        console.log(result);
      });
    }
  }
}
