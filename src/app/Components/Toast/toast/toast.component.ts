import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  isActive: boolean = false;
  progressActive: boolean = false;
  timer1: ReturnType<typeof setTimeout> | undefined;
  timer2: ReturnType<typeof setTimeout> | undefined;

  showToast(): void {
    this.isActive = true;
    this.progressActive = true;

    this.timer1 = setTimeout(() => {
      this.isActive = false;
    }, 5000);

    this.timer2 = setTimeout(() => {
      this.progressActive = false;
    }, 5300);
  }

  closeToast(): void {
    this.isActive = false;
    this.progressActive = false;

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}
