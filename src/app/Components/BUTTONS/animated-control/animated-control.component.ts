import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-animated-control',
  templateUrl: './animated-control.component.html',
  styleUrls: ['./animated-control.component.scss'],
})
export class AnimatedControlComponent implements OnInit {
  @ViewChild('segmentedControl', { static: true })
  segmentedControlRef?: ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input()   title:string='';
  @Input() options: string[] = ['16:9' , '4:3' , '1:1'];
  selectedOption = 0;
  slideTransform = 0;
  segmentWidth: number = 0;

  selectOption(index: number): void {
    const segmentedControl = this.segmentedControlRef?.nativeElement;
    const width = segmentedControl.offsetWidth;
    this.segmentWidth = width;
    // console.log('Segmented Control Width:', widthZ);
    this.selectedOption = index;
    this.slideTransform = index * this.segmentWidth;
  }

  ngOnInit(): void {}
}
