import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-data-switch',
  templateUrl: './data-switch.component.html',
  styleUrls: ['./data-switch.component.scss'],
})
export class DataSwitchComponent implements OnInit {
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

  ngOnInit(): void {}
}
