import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  time: string = '';
  date: string = '';
  private week: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime(): void {
    const cd = new Date();
    this.time =
      this.zeroPadding(cd.getHours(), 2) +
      ':' +
      this.zeroPadding(cd.getMinutes(), 2) +
      ':' +
      this.zeroPadding(cd.getSeconds(), 2);
    this.date =
      this.zeroPadding(cd.getFullYear(), 4) +
      '-' +
      this.zeroPadding(cd.getMonth() + 1, 2) +
      '-' +
      this.zeroPadding(cd.getDate(), 2) +
      ' ' +
      this.week[cd.getDay()];
  }

  private zeroPadding(num: number, digit: number): string {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
}
