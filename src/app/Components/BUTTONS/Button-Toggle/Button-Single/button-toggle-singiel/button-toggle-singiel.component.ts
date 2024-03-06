import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button-toggle-singiel',
  templateUrl: './button-toggle-singiel.component.html',
  styleUrls: ['./button-toggle-singiel.component.scss'],
})
export class ButtonToggleSingielComponent implements OnInit , AfterViewInit{
  @ViewChild('buttonElement') buttonElement!: ElementRef;
  
  constructor(private renderer: Renderer2) {}

  buttons = [
    {
      id: 1,
      name: 'button 1',
    },
    {
      id: 2,
      name: 'button 2',
    },
    {
      id: 3,
      name: 'button 3',
    },
  ];
  selectedOption: any = '';

  ngAfterViewInit() {
    const anchorElements = document.querySelectorAll('a');

    anchorElements.forEach(anchorElement => {
      this.renderer.listen(anchorElement, 'click', (event: MouseEvent) => {
        const x = event.clientX - anchorElement.offsetLeft;
        const y = event.clientY - anchorElement.offsetTop;

        const ripples = this.renderer.createElement('span');
        this.renderer.setStyle(ripples, 'left', x + 'px');
        this.renderer.setStyle(ripples, 'top', y + 'px');
        this.renderer.appendChild(anchorElement, ripples);

        setTimeout(() => {
          this.renderer.removeChild(anchorElement, ripples);
        }, 1000);
      });
    });
  }

  ngOnInit(): void {}
}
