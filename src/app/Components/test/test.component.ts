import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {

  @ViewChild('range') rangeInput!: ElementRef;
  @ViewChild('label') label!: ElementRef;
  @ViewChild('inputSlide') inputSlide!:ElementRef;
  isSliderFocused = false;
  sliderValue = null;
  private previousInputValue: string = '';

  constructor(private renderer: Renderer2) {}


  updateSliderValue() {
    this.isSliderFocused = true;
    this.updateStyles();
  }


  onSliderBlur() {
    this.isSliderFocused = false;
  }

    //  updateStyles(){
    //          const inputSlide = this.inputSlide.nativeElement;

    //     const value = this.sliderValue!;
    //     const rangeWidth = getComputedStyle(this.rangeInput.nativeElement).getPropertyValue('width');
    //     const labelWidth = getComputedStyle(this.label.nativeElement).getPropertyValue('width');
    //     const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    //     const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
    //     const max = +this.rangeInput.nativeElement.max;
    //     const min = +this.rangeInput.nativeElement.min;
    //     const left =
    //       value * (numWidth / max) -
    //       numLabelWidth / 2 +
    //       this.scale(value, min, max, 10, -10);


    //       inputSlide.style.background = `linear-gradient(to right, green 0%, darkgreen ${inputSlide.value}%, grey ${inputSlide.value}%, grey 100%)`;


    //     this.renderer.setStyle(this.label.nativeElement, 'left', `${left}px`);

    //     this.renderer.setProperty(this.label.nativeElement, 'innerHTML', value);

    //  }

updateStyles(){
  const inputSlide = this.inputSlide.nativeElement;
  const value = this.sliderValue!;
  const label = this.label.nativeElement;
if(value !== this.previousInputValue){



  const rangeWidth = getComputedStyle(this.rangeInput.nativeElement).getPropertyValue('width');
      const labelWidth = getComputedStyle(this.label.nativeElement).getPropertyValue('width');
      const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
      const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
      const max = +this.rangeInput.nativeElement.max;
      const min = +this.rangeInput.nativeElement.min;
      const left =
        value * (numWidth / max) -
        numLabelWidth / 2 +
        this.scale(value, min, max, 10, -10);


        inputSlide.style.background = `linear-gradient(to right, green 0%, darkgreen ${inputSlide.value}%, grey ${inputSlide.value}%, grey 100%)`;
        label.classList.add('show');

      this.renderer.setStyle(this.label.nativeElement, 'left', `${left}px`);

      this.renderer.setProperty(this.label.nativeElement, 'innerHTML', value);

      this.previousInputValue = value;



}else{
  setTimeout(() => {
    label.classList.remove('show');
  }, 2000);
}


}


  scale(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}
