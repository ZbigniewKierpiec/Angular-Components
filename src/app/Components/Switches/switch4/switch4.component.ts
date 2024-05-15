import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-switch4',
  templateUrl: './switch4.component.html',
  styleUrls: ['./switch4.component.scss'],
})
export class Switch4Component implements OnInit {
  // Declaring a ViewChild to access the overlay element
  @ViewChild('overlay') overlay?: ElementRef;
  @ViewChild('squareElement', { static: true }) squareElement?: ElementRef;
  // Injecting Renderer2 and ElementRef for DOM manipulation
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  active: boolean = false;
  // Property to track the state of the checkbox
  isChecked: boolean = false;

  // Function to toggle the checkbox state

  toggleCheckbox() {
    // Toggle the isChecked property
    this.isChecked = !this.isChecked;

    const overlay = this.overlay?.nativeElement;

    // Checking if overlay is defined
    if (this.overlay) {
      // Add the 'active' class to trigger the overlay animation
      this.renderer.addClass(overlay, 'active');

      // Reset overlay animation to trigger it on every click
      overlay.style.animation = 'none';
      setTimeout(() => {
        this.overlay!.nativeElement.style.animation = '';
      }, 10);
    }
  }

  toggleAnimation() {
    // Toggle the animation state
    this.active = !this.active;

    // Ensure the square element reference exists
    if (!this.squareElement) return;

    // Find the path element within the square element
    const pathElement = this.squareElement.nativeElement.querySelector('.path');
    // Ensure the path element exists
    if (!pathElement) return;

    // Determine the animation direction and classes to add/remove
    const animationDirection = this.active ? 'forwards' : 'reverse';
    const classToAdd = this.active ? 'active' : 'active-reverse';
    const classToRemove = this.active ? 'active-reverse' : 'active';

    // Add and remove CSS classes to trigger the animation
    this.renderer.addClass(this.squareElement.nativeElement, classToAdd);
    this.renderer.removeClass(this.squareElement.nativeElement, classToRemove);

    // Reset the animation to its initial state
    this.renderer.setStyle(pathElement, 'animation', 'none');

    // Delay setting the animation to ensure the reset takes effect
    setTimeout(() => {
      this.renderer.setStyle(
        pathElement,
        'animation',
        `drawPath 1s ease ${animationDirection} .5s`
      );
    }, 0);
  }

  ngOnInit(): void {}
}
