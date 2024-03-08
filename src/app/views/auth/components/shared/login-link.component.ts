import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-to-login',
  standalone: true,
  imports: [RouterModule],
  template: `<a
    class="text-secondary mr-2 cursor-pointer"
    [routerLink]="['/auth', 'login']"
    >Back to login</a
  >`,
})
export class LoginLinkComponent {}
