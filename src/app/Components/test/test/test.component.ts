import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SideNavComponent } from '../../Side-Nav/side-nav/side-nav.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',

  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {}
}
