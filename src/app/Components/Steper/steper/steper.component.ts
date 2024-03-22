import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent {
  title = 'steper';
  @ViewChild('squareElement', { static: true }) squareElement?: ElementRef;
  @ViewChild('parentElement', { static: true }) parentElement?: ElementRef;
  active: boolean = false;
  constructor(private renderer: Renderer2) {}

  currentActive: number = 1;
  index: number = 0;
  progressWidth: string = '0%';
  save: boolean = false;


  prevStep() {
    if (this.currentActive > 1) {
      this.currentActive--;
      this.updateProgress();
      this.index = this.currentActive;
      console.log(this.currentActive);
      this.saveForm();
    }
  }

  nextStep() {
    if (this.currentActive < 3) {
      this.currentActive++;
      this.updateProgress();
      this.index = this.currentActive;
      console.log(this.currentActive);
      this.inputValue='';
    }
  }

  setCurrentActive(step: number) {
    this.currentActive = step;
    this.updateProgress();
  }

  updateProgress() {
    const progressPercentage = ((this.currentActive - 1) / 2) * 100;
    this.progressWidth = progressPercentage + '%';
  }



  saveForm() {
    const zee = this.parentElement?.nativeElement;
    if (this.currentActive === 3) {
        this.renderer.addClass(zee, 'active');
        console.log('saving');
        this.inputValue='';
    } else {
        this.renderer.removeClass(zee, 'active');
    }
}



inputValue: string = '';

submitForm(){
 if(this.inputValue){
  console.log('pelny')
 } else{
  console.log('pusty')
 }
}

}
