import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
 // Define an Interface
interface TVChannel {
  name: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void => active', animate('300ms ease-in')),
      transition('active => void', animate('300ms ease-out')),
    ]),
  ],
})
export class MenuComponent {
  // Define an array of TV channels
  items: TVChannel[] = [
    { name: 'none' },
    { name: 'itv1' },
    { name: 'bbc one' },
    { name: 'sky sport' },
    { name: 'gold' },
    { name: 'sky atlantic' },
    { name: 'itv2' },
    { name: 'sky crime' },
    { name: 'mtv' },
    { name: 'none' },
    { name: 'itv1' },
    { name: 'bbc one' },
    { name: 'sky sport' },
    { name: 'gold' },
    { name: 'sky atlantic' },
    { name: 'itv2' },
    { name: 'sky crime' },
    { name: 'mtv' },
  ];

// Initialize variables

  index!: number;
  active: boolean = false;



// Method to toggle menu visibility

  visable() {
    this.active = !this.active;

  }

// Method to handle click on a channel link

  activeLink(i: any) {
    this.index = i;
    this.active = false;
  }
}
