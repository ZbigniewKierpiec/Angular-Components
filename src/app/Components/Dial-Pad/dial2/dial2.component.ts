import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial2',
  templateUrl: './dial2.component.html',
  styleUrls: ['./dial2.component.scss'],
})
export class Dial2Component implements OnInit {
  @Input() maxCount: number = 4;
  constructor() {}
  pass = '8547';
  active: boolean = false;
  spansArray: number[] = [];
  count = 0;
  outputDigits: string[] = [];
  password: string = '';

  eyeIcon: string = 'fa-eye-slash';

  locked: boolean = false;
  wrong: boolean = false;

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

      if (this.password === this.pass) {
        this.locked = true;
        this.outputDigits = [];
        this.count = 0;
      } else {
        this.locked = false;
      }
    }
  }

  removeLastDigit() {
    if (this.password.length > 0) {
      this.outputDigits.pop();
      this.updatePassword();

      const numberSpans = document.querySelectorAll('.number');

      this.count--;
    }

    if (this.password === this.pass) {
      this.locked = true;
      this.outputDigits = [];
      this.count = 0;
    } else {
      this.locked = false;
      // this.outputDigits=[];
      // this.count=0;
    }
  }

  updatePassword(): void {
    this.password = this.outputDigits.join('');
  }

  clear() {
    this.outputDigits = [];
    this.password = '';
    this.count = 0;
    this.locked = false;
  }

  ngOnInit(): void {
    this.spansArray = Array(this.maxCount).fill(0);
  }
}
