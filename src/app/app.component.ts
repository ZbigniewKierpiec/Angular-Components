import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ThemeService } from './theme.service';
import { SideNavComponent } from './Components/Side-Nav/side-nav/side-nav.component';
import { NotificationComponent } from './Components/Notyification/notification/notification.component';
import { animate, style, transition, trigger } from '@angular/animations';
enum ButtonType {
  MaterialButton = 'materialButton',
  AnimatedBorder = 'animatedBorder',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  title = 'app';
  darkMode = false;
  ButtonType = ButtonType;


  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.darkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.darkMode = this.themeService.isDarkMode();
  }
}
