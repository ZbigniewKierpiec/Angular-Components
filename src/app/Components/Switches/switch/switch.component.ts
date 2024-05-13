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
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    const overlay = this.el.nativeElement.querySelector('.overlay');
    const animationClass = 'active';
    this.renderer.addClass(overlay, 'active');
    overlay.style.animation = 'none';
    setTimeout(() => {
      overlay.style.animation = '';
    }, 10);
  }
}
