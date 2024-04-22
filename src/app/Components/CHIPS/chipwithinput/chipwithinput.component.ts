import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chipwithinput',
  templateUrl: './chipwithinput.component.html',
  styleUrls: ['./chipwithinput.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('400ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ChipwithinputComponent {
  chipsList: string[] = [];
  item: string = '';
  placeholder: string = '';
  dynamicContent: number = 0;
  @ViewChild('autoInput') autoInput!: ElementRef;

  newChip(chipInput: any) {
    const inputText = this.item.trim(); // Trim the input value
    if (inputText !== '') {
      this.chipsList.push(inputText);
      this.dynamicContent = this.chipsList.length;
      // Clear input after adding chip
      this.item = ''; // Reset the value of the input field
    }
  }

  onInputFocus() {
    console.log('Input field is focused.');
    this.placeholder = 'New Input';
  }

  onInputBlur() {
    console.log('Input field lost focus.');
    this.placeholder = '';
  }

  removeChip(index: number) {
    this.chipsList.splice(index, 1);
    this.dynamicContent = this.chipsList.length;
    this.onInputFocus();
    if (this.chipsList.length == 0) {
      this.placeholder = '';
    }
  }
}
