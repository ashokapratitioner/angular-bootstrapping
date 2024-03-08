import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTimePipe } from '../../../../shared/pipes/date-time.pipe';

@Component({
  selector: 'app-dashboard-teams',
  templateUrl: './dashboard-teams.component.html',
  styleUrls: ['./dashboard-teams.component.scss'],
})
export class DashboardTeamsComponent {
  @Input() inputFromParent: string | undefined = 'From parent to child';
  @Output() messageEvent = new EventEmitter();

  formattedDateTime: string = '';

  constructor() {
    const dateTime = new DateTimePipe();
    const now = new Date();
    this.formattedDateTime = dateTime.transform(now);
  }
  now = new Date();

  sendMessage() {
    this.messageEvent.emit('From child to parent'); // Emit the message when the button is clicked
  }
}
