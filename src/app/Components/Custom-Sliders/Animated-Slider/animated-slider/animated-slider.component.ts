import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-slider',
  templateUrl: './animated-slider.component.html',
  styleUrls: ['./animated-slider.component.scss'],
})
export class AnimatedSliderComponent {
  @ViewChild('slideValue') slideValue!: ElementRef;
  @ViewChild('inputSlide') inputSlide!: ElementRef;

  isSliderFocused = false;
  sliderValue = null;
  updateSliderValue() {
    this.isSliderFocused = true;
    this.updateStyles();
  }

  onSliderBlur() {
    this.isSliderFocused = false;
  }

  private previousInputValue: string = '';

  private updateStyles() {
    const slideValue = this.slideValue.nativeElement;
    const inputSlide = this.inputSlide.nativeElement;
    const sliderValue: number = 0;
    if (slideValue && inputSlide) {
      let value = inputSlide.value;

      // Check if the value has changed
      if (value !== this.previousInputValue) {
        slideValue.textContent = value;

        slideValue.style.left = value + '%';

        slideValue.classList.add('show');

        inputSlide.style.background = `linear-gradient(to right, green 0%, darkgreen ${inputSlide.value}%, grey ${inputSlide.value}%, grey 100%)`;

        // Update the previous value
        this.previousInputValue = value;
        console.log('one' + value + 'two' + this.previousInputValue);
      } else {
        // Value has not changed, remove the 'show' class
        // const slideValue = this.slideValue.nativeElement;

        setTimeout(() => {
          slideValue.classList.remove('show');
        }, 2000);

        console.log('Value has not changed, removing show class');
      }
    }
  }
}
