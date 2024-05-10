import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-svg-progress-bar',
  templateUrl: './svg-progress-bar.component.html',
  styleUrls: ['./svg-progress-bar.component.scss'],
})
export class SvgProgressBarComponent {
  // ViewChild to reference the SVG element in the template
  @ViewChild('svgElement') svgElement?: ElementRef<SVGElement>;
  // Initial values for properties
  value: number = 99;
  pathString: string = 'M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0';
  strokeDashoffset: string = '0';
  strokeDasharray: string = '0';
  // Constructor injecting Renderer2
  constructor(private renderer: Renderer2) {}

  // Lifecycle hook called after the view has been fully initialized
  ngAfterViewInit(): void {
    // Using setTimeout to ensure the DOM is ready
    setTimeout(() => {
      // Finding the SVG path element with the class 'meter'
      const path = this.svgElement?.nativeElement.querySelector(
        '.meter'
      ) as SVGPathElement;
      // Getting the total length of the path
      const length = path.getTotalLength();
      // Setting strokeDasharray to the total length as a string
      this.strokeDasharray = length.toString();
      // Calculating and setting strokeDashoffset based on value
      this.strokeDashoffset = Math.max(
        0,
        length * ((100 - this.value) / 100)
      ).toString();
    });
  }
}
