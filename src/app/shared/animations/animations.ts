import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.3s', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.3s', style({ opacity: 0 }))]),
]);
