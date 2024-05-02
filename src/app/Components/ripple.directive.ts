import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: any) {
    // Create ripple element
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');

    // Get dimensions of the host element
    const rect = this.el.nativeElement.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);

    // Set ripple size and position
    this.renderer.setStyle(ripple, 'width', `${diameter}px`);
    this.renderer.setStyle(ripple, 'height', `${diameter}px`);
    const offsetX = event.clientX - rect.left - diameter / 2;
    const offsetY = event.clientY - rect.top - diameter / 2;
    this.renderer.setStyle(ripple, 'left', `${offsetX}px`);
    this.renderer.setStyle(ripple, 'top', `${offsetY}px`);

    // Add ripple to the host element
    this.renderer.appendChild(this.el.nativeElement, ripple);

    // Remove ripple after animation
    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, ripple);
    }, 500);
  }
}
