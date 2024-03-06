import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-toggle-multiple',
  templateUrl: './button-toggle-multiple.component.html',
  styleUrls: ['./button-toggle-multiple.component.scss']
})
export class ButtonToggleMultipleComponent implements OnInit {

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

  selectedOptions: number[] = [];

  toggleSelection(itemId: number): void {
    const index = this.selectedOptions.indexOf(itemId);

    if (index === -1) {
      // If not already selected, add to the selectedOptions array
      this.selectedOptions.push(itemId);
    } else {
      // If already selected, remove from the selectedOptions array
      this.selectedOptions.splice(index, 1);
    }
  }


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









  ngOnInit(): void {
  }

}
