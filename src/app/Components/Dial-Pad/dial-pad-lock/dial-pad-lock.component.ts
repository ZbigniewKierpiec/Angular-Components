import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial-pad-lock',
  templateUrl: './dial-pad-lock.component.html',
  styleUrls: ['./dial-pad-lock.component.scss'],
})
export class DialPadLockComponent implements OnInit {
  constructor() {}

  active: boolean = false;
  spansArray: number[] = [];
  count = 0;
  outputDigits: string[] = [];
  password: string = '';
  maxCount: number = 4;
  eyeIcon: string = 'fa-eye-slash';

  showPass() {
    this.active = !this.active;
    this.active ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
  }

  addDigit(digit: string) {
    console.log(digit);
    if (this.count < this.maxCount) {
      this.outputDigits.push(digit);
      this.updatePassword();
      this.count++;
    }
  }

  removeLastDigit() {
    if (this.password.length > 0) {
      this.outputDigits.pop();
      this.updatePassword();

      const numberSpans = document.querySelectorAll('.number');

      this.count--;
    }
  }

  updatePassword(): void {
    this.password = this.outputDigits.join('');
  }

  clear() {
    this.outputDigits = [];
    this.count = 0;
  }

  ngOnInit(): void {
    this.spansArray = Array(this.maxCount).fill(0);
  }
}
