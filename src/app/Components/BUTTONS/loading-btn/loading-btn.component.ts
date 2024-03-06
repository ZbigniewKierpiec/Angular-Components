import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-loading-btn',
  templateUrl: './loading-btn.component.html',
  styleUrls: ['./loading-btn.component.scss'],
})
export class LoadingBtnComponent implements OnInit {
  @ViewChild('myButton', { static: true }) myButton?: ElementRef;
  @ViewChild('icon', { static: true }) icon?: ElementRef;
  constructor(private renderer: Renderer2) {}

  handleButtonClick(event: Event): void {
    const button = this.myButton?.nativeElement;
    const i = this.icon?.nativeElement;
    this.renderer.addClass(button, 'loading');

    setTimeout(() => {
      this.renderer.removeClass(button, 'loading');
      this.addClasss();
    }, 2000);

    const transitionEndHandler = () => {
      console.log('transitionend event');

      this.myButton?.nativeElement.removeEventListener(
        'transitionend',
        transitionEndHandler
      );

      this.renderer.addClass(button, 'btnActive');
      this.renderer.addClass(button, 'activeX');
    };
    this.myButton?.nativeElement.addEventListener(
      'transitionend',
      transitionEndHandler
    );
  }

  addClasss() {
    console.log('add clases icon');

    this.renderer.addClass(this.icon?.nativeElement, 'iconActive');
  }

  ngOnInit(): void {}
}
