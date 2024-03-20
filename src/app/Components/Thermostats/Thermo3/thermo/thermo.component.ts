import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermo',
  templateUrl: './thermo.component.html',
  styleUrls: ['./thermo.component.scss']
})
export class ThermoComponent implements OnInit {



  constructor(private elementRef: ElementRef) {}
  name: string = '';
  temperature: number = 23.6;
  ti: number = 9.0;
  gradi: any = 19;
  max = 34;
  min = 7;
  heatValue: number = 0;
  extValue: number = 0;
  transformValue: string = '';
  fillAnimation: string = '';
  shadowAnimation: string = '';

  up() {
    this.ti -= 0.5;
    console.log(this.ti);
  }

  red(): string {
    return `fun ${this.ti}s infinite linear both`;
  }

  do() {
    this.ti += 0.5;
    console.log(this.ti);
  }

  minusMouseDown() {
    if (this.gradi > this.min) {
      this.gradi--;
      this.updateGr();
      const fill1 = this.elementRef.nativeElement.querySelector(
        '.fill1'
      ) as HTMLElement;
      const fill2 = this.elementRef.nativeElement.querySelector(
        '.fill2'
      ) as HTMLElement;

      if (this.gradi >= 18) {
        fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
        fill1.style.transitionDelay = '0s';
      } else if (this.gradi === 17) {
        fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
        fill2.style.transitionDelay = '0.5s';
      } else {
        fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
        fill2.style.transitionDelay = '0s';
      }
    }
  }

  plusMouseDown() {
    if (this.gradi < this.max) {
      this.gradi++;
      this.updateGr();
      const fill1 = this.elementRef.nativeElement.querySelector(
        '.fill1'
      ) as HTMLElement;
      const fill2 = this.elementRef.nativeElement.querySelector(
        '.fill2'
      ) as HTMLElement;

      if (this.gradi > 19) {
        fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
        fill1.style.transitionDelay = '0s';
      } else if (this.gradi === 19) {
        fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
        fill1.style.transitionDelay = '1s';
      } else {
        fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
        fill2.style.transitionDelay = '0s';
      }
    }
  }

  updateGr() {
    this.elementRef.nativeElement.querySelector('.heat').textContent =
      '' + this.gradi;

    // this.elementRef.nativeElement.querySelector('.number').style.transform =
    //   'translate(-50%, -50%) rotate(' + (-180 + this.gradi * 10) + 'deg)';
    // this.elementRef.nativeElement.querySelector('.shadow').style.transform =
    //   'translate(-50%, -50%) rotate(' + (-180 + this.gradi * 10) + 'deg)';
    this.elementRef.nativeElement.querySelector('.fill').style.animation =
      'none';
    // this.elementRef.nativeElement.querySelector('.shadow').style.animation =
    //   'none';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateGr();
  }



}
