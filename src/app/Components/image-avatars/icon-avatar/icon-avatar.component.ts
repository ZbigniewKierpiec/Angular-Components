import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-icon-avatar',
  templateUrl: './icon-avatar.component.html',
  styleUrls: ['./icon-avatar.component.scss'],
})
export class IconAvatarComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() background: string | undefined;
  @Input() color: string | undefined;
  @Input() size!: string;

  fontSize: any = '';

  constructor(private rend: Renderer2, private elementRef: ElementRef) {}

  fontCalc() {
    this.fontSize = parseInt(this.size) / 2;
  }

  ngOnInit(): void {
    this.fontCalc();
  }
}
