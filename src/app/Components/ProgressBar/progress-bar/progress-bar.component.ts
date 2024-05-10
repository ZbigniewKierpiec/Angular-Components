import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  // This component expects a 'value' input, which is a string
  @Input() value: string = '';

  constructor() {}
  // Variable to store the current item value, initialized to 0

  item:number=0;

// Function to increment the item value

  increment():void {
    if (this.item < 100) {
        this.item+=5;
    }
}






}
