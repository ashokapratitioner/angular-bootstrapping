import { Injectable } from '@angular/core';
import { RestService } from '../../../../shared/services/rest-service/Rest.service';
import { LoginData } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private readonly restService: RestService) {}

  authenticated = () => true;

  login = (data: LoginData) =>
    this.restService.post('login', {
      ...data,
    });
}
