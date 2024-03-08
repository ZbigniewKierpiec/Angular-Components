import { trigger, state, style, animate, transition } from '@angular/animations';
export const slideAnimation = trigger('slideInOut', [
  state('void', style({
    height: '0',
    visibility:'hidden'

  })),
  state('active', style({
    height: '*',
    visibility:'visible'

  })),
  transition('void <=> active', [
    animate('300ms ease-in-out')
  ])
]);
