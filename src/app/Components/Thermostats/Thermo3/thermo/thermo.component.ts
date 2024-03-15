import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermo',
  templateUrl: './thermo.component.html',
  styleUrls: ['./thermo.component.scss']
})
export class ThermoComponent implements OnInit {

  centerX: number = 50; // X coordinate of the center of the SVG viewBox
  centerY: number = 50; // Y coordinate of the center of the SVG viewBox
  radius: number = 40; // Radius of the arc
  pathData?: string; // Path data string for the arc
  constructor() {
    // Calculate the starting and ending points of the arc to center it
    const startX = this.centerX - this.radius;
    const startY = this.centerY;
    const endX = this.centerX + this.radius;
    const endY = this.centerY;

    // Construct the pathData string
    this.pathData = `M${startX},${startY} A${this.radius},${this.radius} 0 1,1 ${endX},${endY}`;
  }

  ngOnInit(): void {
  }

}
