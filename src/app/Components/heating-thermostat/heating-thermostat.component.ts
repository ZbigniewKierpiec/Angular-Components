import { NgStyle } from '@angular/common';
import { Component, ElementRef, NgModule, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-heating-thermostat',
  standalone:true,
  imports:[NgStyle , FormsModule],
  templateUrl: './heating-thermostat.component.html',
  styleUrls: ['./heating-thermostat.component.scss'],

})
export class HeatingThermostatComponent implements OnInit {


  // constructor(private elementRef: ElementRef) {}
  // name: string = '';
  // temperature: number = 23.6;
  // ti: number = 9.0;
  // gradi: any = 19;
  // max = 34;
  // min = 7;
  // heatValue: number = 0;
  // extValue: number = 0;
  // transformValue: string = '';
  // fillAnimation: string = '';
  // shadowAnimation: string = '';
  // checked: boolean = false;

  // up() {
  //   this.ti -= 0.5;
  //   console.log(this.ti);
  // }

  // red(): string {
  //   return `fun ${this.ti}s infinite linear both`;
  // }

  // do() {
  //   this.ti += 0.5;
  //   console.log(this.ti);
  // }

  // minusMouseDown() {
  //   if (this.gradi > this.min) {
  //     this.gradi--;
  //     this.updateGr();
  //     const fill1 = this.elementRef.nativeElement.querySelector(
  //       '.fill1'
  //     ) as HTMLElement;
  //     const fill2 = this.elementRef.nativeElement.querySelector(
  //       '.fill2'
  //     ) as HTMLElement;

  //     if (this.gradi >= 18) {
  //       fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
  //       fill1.style.transitionDelay = '0s';
  //     } else if (this.gradi === 17) {
  //       fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
  //       fill2.style.transitionDelay = '0.5s';
  //     } else {
  //       fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
  //       fill2.style.transitionDelay = '0s';
  //     }
  //   }
  // }

  // plusMouseDown() {
  //   if (this.gradi < this.max) {
  //     this.gradi++;
  //     this.updateGr();
  //     const fill1 = this.elementRef.nativeElement.querySelector(
  //       '.fill1'
  //     ) as HTMLElement;
  //     const fill2 = this.elementRef.nativeElement.querySelector(
  //       '.fill2'
  //     ) as HTMLElement;

  //     if (this.gradi > 19) {
  //       fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
  //       fill1.style.transitionDelay = '0s';
  //     } else if (this.gradi === 19) {
  //       fill1.style.transform = `rotate(${(this.gradi - 18) * 10}deg)`;
  //       fill1.style.transitionDelay = '1s';
  //     } else {
  //       fill2.style.transform = `rotate(${this.gradi * 10}deg)`;
  //       fill2.style.transitionDelay = '0s';
  //     }
  //   }
  // }

  // updateGr() {
  //   this.elementRef.nativeElement.querySelector('.heat').textContent =
  //     '' + this.gradi;

  //   // this.elementRef.nativeElement.querySelector('.number').style.transform =
  //   //   'translate(-50%, -50%) rotate(' + (-180 + this.gradi * 10) + 'deg)';
  //   // this.elementRef.nativeElement.querySelector('.shadow').style.transform =
  //   //   'translate(-50%, -50%) rotate(' + (-180 + this.gradi * 10) + 'deg)';
  //   this.elementRef.nativeElement.querySelector('.fill').style.animation =
  //     'none';
  //   // this.elementRef.nativeElement.querySelector('.shadow').style.animation =
  //   //   'none';
  // }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.updateGr();
  // }

  // check() {
  //   this.checked !== this.checked; // Toggle the value of checked
  //   console.log('Checked:', this.checked);
  // }



  @ViewChild('fill1') fill1?: ElementRef;
  @ViewChild('fill2') fill2?: ElementRef;

  temperature: number = 23.6;
  gradi: number = 19;
  max: number = 34;
  min: number = 7;
  heatValue: number = 0;
  checked: boolean = false;
fillAnimation: any;

  constructor(private renderer: Renderer2) {}

  minusMouseDown() {
    if (this.gradi > this.min) {
      this.gradi--;
      this.updateGradi();
      this.updateFill();
    }
  }

  plusMouseDown() {
    if (this.gradi < this.max) {
      this.gradi++;
      this.updateGradi();
      this.updateFill();
    }
  }

  updateGradi() {
    this.heatValue = this.gradi;
  }

  updateFill() {
    const fill1 = this.fill1?.nativeElement;
    const fill2 = this.fill2?.nativeElement;

    if (this.gradi >= 18) {
      this.renderer.setStyle(fill1, 'transform', `rotate(${(this.gradi - 18) * 10}deg)`);
      this.renderer.setStyle(fill1, 'transitionDelay', '0s');
    } else if (this.gradi === 17) {
      this.renderer.setStyle(fill2, 'transform', `rotate(${this.gradi * 10}deg)`);
      this.renderer.setStyle(fill2, 'transitionDelay', '0.5s');
    } else {
      this.renderer.setStyle(fill2, 'transform', `rotate(${this.gradi * 10}deg)`);
      this.renderer.setStyle(fill2, 'transitionDelay', '0s');
    }
  }

  check() {
    this.checked = !this.checked; // Toggle the value of checked
    console.log('Checked:', this.checked);
  }


  ngOnInit(): void {

  }
}
