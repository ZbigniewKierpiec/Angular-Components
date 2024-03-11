import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss'],

  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          height: '10rem',
          opacity: 1,
        })
      ),
      state(
        'out',
        style({
          height: '0',
          opacity: 0,
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],




})
export class AcordionComponent implements OnInit {
  sections = [
    {
      id:0,
      title: 'Section 1',
      content: 'Content for Section 1',
      // icon: 'fa-solid fa-chevron-down',
      expanded: false,
    },
    {
      id:1,
      title: 'Section 2',
      content: 'Content for Section 2',
      // icon: 'fa-solid fa-chevron-down',
      expanded: false,
    },
    {
      id:2,
      title: 'Section 3',
      content: 'Content for Section 3',
      // icon: 'fa-solid fa-chevron-down',
      expanded: false,
    },
  ];

  expandedSectionIndex: number | null = null;
  active: boolean = true;
  activeSection:number=0;

  toggleSection(index: number): void {
    if (this.expandedSectionIndex === index) {
      // Clicked on the already expanded section, so collapse it
      this.expandedSectionIndex = null;
      this.sections.forEach((f) => (f.expanded = true));


    } else {
      // Collapse the previously expanded section
      this.expandedSectionIndex = index;
      this.sections.forEach((f) => (f.expanded = false));
    }
  }

  isSectionExpanded(index: number): boolean {
    return this.expandedSectionIndex === index;
  }

  ngOnInit(): void {




  }
}
