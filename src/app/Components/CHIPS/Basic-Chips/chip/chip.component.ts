import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() text: string = '';
  active: boolean = false;
  dynamicText = this.text; // Initial text

  isActive() {
    this.active = !this.active;
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.dynamicText = this.text;
  }
}
