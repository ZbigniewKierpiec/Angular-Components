import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial2',
  templateUrl: './dial2.component.html',
  styleUrls: ['./dial2.component.scss']
})
export class Dial2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  input: string = '';
  correct: string = '1593';
  dots: string[] = ['', '', '', ''];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  onNumberClick(number: number) {
    const dotIndex = this.input.length;
    this.input += number;
    this.dots[dotIndex] = 'active';

    if (this.input.length >= 4) {
      if (this.input !== this.correct) {
        this.dots.fill('wrong');
        document.body.classList.add('wrong');
      } else {
        this.dots.fill('correct');
        document.body.classList.add('correct');
      }

      setTimeout(() => {
        this.dots.fill('');
        this.input = '';
        document.body.classList.remove('wrong', 'correct');
      }, 900);
    } else {
      setTimeout(() => {
        this.dots[dotIndex] = '';
      }, 1000);
    }
  }


}
