import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  inputFromParent = 'Message from parent';
  inputFromChild: string =
    'Default value, will be changed once clicked on send button';

  onMessageReceived = ($event: string) => {
    console.log('Received message', $event);
    this.inputFromChild = $event;
  };
}
