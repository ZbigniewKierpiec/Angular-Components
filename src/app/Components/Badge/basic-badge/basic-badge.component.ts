import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-badge',
  templateUrl: './basic-badge.component.html',
  styleUrls: ['./basic-badge.component.scss'],
})
export class BasicBadgeComponent implements OnInit {
  // Input properties
  @Input() size: string = '';
  @Input() color: string = '';
  @Input() background: any;
  @Input() number: any;

  // Dynamic properties
  fontSize: any = '';
  widthVariable: any = '2';
  boxShadow: any = '3';
  borderRadius: any = '';

  constructor() {}

  // Method to calculate font size, width, box shadow, and border radius
  fontCalc() {
    this.fontSize = parseInt(this.size) / 4;
    this.widthVariable = parseInt(this.size) / 2;
    this.boxShadow = parseInt(this.size) / 20;
    this.borderRadius = parseInt(this.size) / 20;
  }

  // Method to validate the number displayed in the badge

  validateNumber(): number {
    if (this.number >= 0 && this.number <= 99) {
      return this.number;
    } else {
      return (this.number = 0);
    }
  }

  ngOnInit(): void {
    // Called when the component is initialized
    // Calculate dynamic properties based on input values
    this.fontCalc();
  }
}
