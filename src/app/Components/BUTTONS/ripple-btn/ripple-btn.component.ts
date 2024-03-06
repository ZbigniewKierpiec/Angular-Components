import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-ripple-btn',
  templateUrl: './ripple-btn.component.html',
  styleUrls: ['./ripple-btn.component.scss'],
})
export class RippleBtnComponent implements AfterViewInit {
  @ViewChild('buttonElement') buttonElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const button = this.buttonElement.nativeElement;

    this.renderer.listen(button, 'click', (event: MouseEvent) => {
      const x = event.clientX - button.offsetLeft;
      const y = event.clientY - button.offsetTop;

      const ripples = this.renderer.createElement('span');
      this.renderer.setStyle(ripples, 'left', x + 'px');
      this.renderer.setStyle(ripples, 'top', y + 'px');
      this.renderer.appendChild(button, ripples);

      setTimeout(() => {
        this.renderer.removeChild(button, ripples);
      }, 1000);
    });
  }
}
