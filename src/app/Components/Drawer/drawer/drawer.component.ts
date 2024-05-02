import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],

})
export class DrawerComponent {
  dialActive: boolean = false;

  @ViewChild('dialContainer') dialContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleDial(event: MouseEvent) {
    console.log(this.dialActive);
    event.stopPropagation();
    this.dialActive = !this.dialActive;
    if (this.dialActive) {
      this.renderer.addClass(this.dialContainer.nativeElement, 'dial--active');
    } else {
      this.renderer.removeClass(
        this.dialContainer.nativeElement,
        'dial--active'
      );
    }
  }

  buttons = [
    { icon: 'fa-regular fa-paper-plane',name:'send'},
    { icon: 'fa-solid fa-camera-retro', name:'photo' },
    { icon: 'fa-solid fa-power-off', name:'power' }
  ];



  getAnimationDelay(index: number): string {
    // Adjust the delay time for each button as needed
    return `${0.9 + index * 0.9}s`; // Start with 0.3s delay and increment by 0.1s for each button
  }






}
