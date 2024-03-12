import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  selectedTab: number = 0;
  markerPosition: number = 0;
  markerWidth: number = 0;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  tabs = [
    { title: 'Home', content: 'Lorem ipsum set dolor amet...' },
    { title: 'About us', content: 'Lorem ipsum set dolor amet...' },
    { title: 'Contact', content: 'Lorem ipsum set dolor amet...' },
  ];

  selectTab(index: number): void {
    this.selectedTab = index;

    const tabNavLinks =
      this.el.nativeElement.querySelectorAll('.tabs-nav__link');
    const selectedTabElement = tabNavLinks[index];
    const markerPosition = selectedTabElement.offsetLeft;
    const markWidth = selectedTabElement.offsetWidth;
    this.markerWidth = markWidth;
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.tab-nav-marker'),
      'left',
      `${markerPosition}px`
    );
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
