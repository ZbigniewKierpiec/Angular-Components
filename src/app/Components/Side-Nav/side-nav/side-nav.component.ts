import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  @ViewChild('slider', { static: true }) slider?: ElementRef;

  menuItemsWithIcons: { menuItem: string; icon: string }[] = [
    { menuItem: 'Home', icon: 'fa-solid fa-house' },
    { menuItem: 'About', icon: 'fa-solid fa-tv' },
    { menuItem: 'Services', icon: 'fa-brands fa-flipboard' },
    { menuItem: 'Contact', icon: 'fa-regular fa-lightbulb' },

  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  active: number | undefined;
  name: string = '';
  activeBurger:boolean=false;

  onClick(event: MouseEvent, index: number) {
    // Calculate offset top of clicked list item
    const offsetTop = (event.currentTarget as HTMLElement).offsetTop;

    // Set 'ofsetTop' property to the calculated offset

    this.renderer.setStyle(this.slider?.nativeElement, 'top', offsetTop + 'px');
    console.log(offsetTop);
    this.active = index;
  }

  burgerToggle(){
    this.activeBurger =! this.activeBurger;
    console.log(this.activeBurger)
  }





  ngOnInit(): void {}
}
