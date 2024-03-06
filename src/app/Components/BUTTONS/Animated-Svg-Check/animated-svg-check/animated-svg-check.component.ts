import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-animated-svg-check',
  templateUrl: './animated-svg-check.component.html',
  styleUrls: ['./animated-svg-check.component.scss'],
})
export class AnimatedSvgCheckComponent {
  @ViewChild('squareElement', { static: true }) squareElement?: ElementRef;

  active: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleAnimation() {
    this.active = !this.active;

    const pathElement =
      this.squareElement?.nativeElement.querySelector('.path');

    if (this.active) {
      this.renderer.addClass(this.squareElement?.nativeElement, 'active');
      this.renderer.removeClass(
        this.squareElement?.nativeElement,
        'active-reverse'
      );
      this.renderer.setStyle(pathElement, 'animation', 'none');
      setTimeout(() => {
        this.renderer.setStyle(
          pathElement,
          'animation',
          'drawPath .7s ease forwards'
        );
      }, 0);
    } else {
      this.renderer.removeClass(this.squareElement?.nativeElement, 'active');
      this.renderer.addClass(
        this.squareElement?.nativeElement,
        'active-reverse'
      );
      this.renderer.setStyle(pathElement, 'animation', 'none');
      setTimeout(() => {
        this.renderer.setStyle(
          pathElement,
          'animation',
          'drawPath .7s ease reverse'
        );
      }, 0);
    }
  }
}
