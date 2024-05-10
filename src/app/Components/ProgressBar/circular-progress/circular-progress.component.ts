import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss'],
})
export class CircularProgressComponent implements OnInit {
  // This line defines an input property 'percent', which represents the percentage value of the pie chart. It defaults to 40 if not provided.
  @Input() percent: number = 40;
  // These ViewChild decorators query for specific elements in the component's template and assign them to corresponding properties.
  @ViewChild('pie', { static: true }) pie!: ElementRef;
  @ViewChild('fill', { static: true }) fill!: ElementRef;
  @ViewChild('percentSpan', { static: true }) percentSpan!: ElementRef;

  // The constructor injects the Renderer2 service to manipulate DOM elements.

  constructor(private renderer: Renderer2) {}

  // This method ensures that the percentage value is within the valid range of 0 to 100.

  addNumber(num: number): void {
    this.percent = Math.max(0, Math.min(num, 100));
  }

  // This lifecycle hook is called after Angular initializes the component's views and child views.

  ngOnInit(): void {
    // Ensure the percentage value is within the valid range.
    this.addNumber(this.percent);

    // Calculate the degree of rotation for the filled portion of the pie chart.

    const deg = (360 * this.percent) / 100;

    // Get a reference to the pie chart element.

    const ppcElement = this.pie.nativeElement;

    // Add the 'circle' class to the pie chart if the percentage is greater than 50.
    if (this.percent > 50) {
      this.renderer.addClass(ppcElement, 'circle');
    }

    // Set the style of the fill element to rotate it by the calculated degree.

    this.renderer.setStyle(
      this.fill.nativeElement,
      'transform',
      'rotate(' + deg + 'deg)'
    );
    // Update the content of the percentSpan element to display the percentage value.
    this.percentSpan.nativeElement.innerHTML = this.percent + '%';
  }
}
