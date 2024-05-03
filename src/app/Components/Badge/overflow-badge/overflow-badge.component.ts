import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overflow-badge',
  templateUrl: './overflow-badge.component.html',
  styleUrls: ['./overflow-badge.component.scss']
})
export class OverflowBadgeComponent implements OnInit {

  @Input() content?: string;

  badgeWidth: number  = 0;
  isCircle?:boolean;

  ngOnInit() {
    this.calculateWidth();
    this.fontCalc();
  }

  ngOnChanges() {
    this.calculateWidth();
  }

  calculateWidth() {
    this.isCircle = this.content!.length === 1;
        // Check if content length is 1
    this.badgeWidth = (this.content!!.length * 1.5) // Adjust multiplier and additional padding as needed
  }




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



}
