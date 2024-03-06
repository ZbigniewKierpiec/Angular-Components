import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPath]'
})
export class PathDirective {
  @Input() duration: string = '1s';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const path = this.el.nativeElement;
    const length = path.getTotalLength();

    this.renderer.setStyle(path, 'stroke-dasharray', `${length}`);
    this.renderer.setStyle(path, 'stroke-dashoffset', `${length}`);

    setTimeout(() => {
      this.renderer.setStyle(path, 'stroke-dashoffset', '0');
    }, 0);
  }


}
