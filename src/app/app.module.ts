import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Components/BUTTONS/button/button.component';
import { AnimatedButtonBorderComponent } from './Components/BUTTONS/animated-button-border/animated-button-border.component';
import { InfoComponent } from './Components/BUTTONS/info/info.component';
import { IconButtonsComponent } from './Components/BUTTONS/icon-buttons/icon-buttons.component';
import { AnimatedBorderComponent } from './Components/BUTTONS/animated-border/animated-border.component';
import { RippleBtnComponent } from './Components/BUTTONS/ripple-btn/ripple-btn.component';
import { SegmentedButtonsComponent } from './Components/BUTTONS/segmented-buttons/segmented-buttons.component';
import { NgModule } from '@angular/core';
import { AnimatedControlComponent } from './Components/BUTTONS/animated-control/animated-control.component';
import { LoadingBtnComponent } from './Components/BUTTONS/loading-btn/loading-btn.component';
import { ButtonToggleSingielComponent } from './Components/BUTTONS/Button-Toggle/Button-Single/button-toggle-singiel/button-toggle-singiel.component';
import { ButtonToggleMultipleComponent } from './Components/BUTTONS/Button-Toggle/Button-Multiple/button-toggle-multiple/button-toggle-multiple.component';
import { AnimatedSvgCheckComponent } from './Components/BUTTONS/Animated-Svg-Check/animated-svg-check/animated-svg-check.component';

import { PathDirective } from './Components/BUTTONS/Animated-Svg-Check/path.directive';
import { AnimatedSliderComponent } from './Components/Custom-Sliders/Animated-Slider/animated-slider/animated-slider.component';
import { ChipComponent } from './Components/CHIPS/Basic-Chips/chip/chip.component';
import { AcordionComponent } from './Components/Acordion/acordion/acordion.component';
import { TabsComponent } from './Components/Tabs/tabs/tabs.component';
import { ThermostatComponent } from './Components/Thermostats/Thermostat/thermostat/thermostat.component';
import { Thermostat2Component } from './Components/Thermostats/Thermostat2/thermostat2/thermostat2.component';
import { ThermoComponent } from './Components/Thermostats/Thermo3/thermo/thermo.component';
import { ThemeService } from './theme.service';
import { SteperComponent } from './Components/Steper/steper/steper.component';
import { ToastComponent } from './Components/Toast/toast/toast.component';
import { SpinnerComponent } from './Components/Spinners/spinner/spinner.component';
import { Spinner2Component } from './Components/Spinners/spinner2/spinner2.component';
import { Spinner3Component } from './Components/Spinners/spinner3/spinner3.component';
import { SideNavComponent } from './Components/Side-Nav/side-nav/side-nav.component';

import { BurgerDirective } from './Components/shared/burger.directive';
import { TestComponent } from './Components/test/test.component';
import { HeatingThermostatComponent } from './Components/heating-thermostat/heating-thermostat.component';
import { DismissibleChipComponent } from './Components/CHIPS/dismissible-chip/dismissible-chip.component';
import { ChipwithinputComponent } from './Components/CHIPS/chipwithinput/chipwithinput.component';
import { MenuComponent } from './Components/Skeleton/menu/menu.component';
import { DividerComponent } from './Components/divider/divider.component';
import { NotificationComponent } from './Components/Notyification/notification/notification.component';
import { NotificationItemComponent } from './Components/Notyification/notification-item/notification-item.component';
import { DrawerComponent } from './Components/Drawer/drawer/drawer.component';
import { RippleDirective } from './Components/ripple.directive';
import { ImageAvatarsComponent } from './Components/image-avatars/image-avatars.component';
import { TextAvatarComponent } from './Components/image-avatars/text-avatar/text-avatar.component';
import { IconAvatarComponent } from './Components/image-avatars/icon-avatar/icon-avatar.component';
import { BackdropComponent } from './Components/Backdrop/backdrop/backdrop.component';
import { BasicBadgeComponent } from './Components/Badge/basic-badge/basic-badge.component';
import { OverflowBadgeComponent } from './Components/Badge/overflow-badge/overflow-badge.component';
import { ProgressBarComponent } from './Components/ProgressBar/progress-bar/progress-bar.component';
import { CircularProgressComponent } from './Components/ProgressBar/circular-progress/circular-progress.component';
import { SvgProgressBarComponent } from './Components/ProgressBar/svg-progress-bar/svg-progress-bar.component';
import { SwitchComponent } from './Components/Switches/switch/switch.component';
import { DataSwitchComponent } from './Components/Switches/data-switch/data-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AnimatedButtonBorderComponent,
    InfoComponent,
    IconButtonsComponent,
    AnimatedBorderComponent,
    RippleBtnComponent,
    SegmentedButtonsComponent,
    AnimatedControlComponent,
    LoadingBtnComponent,
    ButtonToggleSingielComponent,
    ButtonToggleMultipleComponent,
    AnimatedSvgCheckComponent,
    PathDirective,
    AnimatedSliderComponent,
    ChipComponent,
    AcordionComponent,
    TabsComponent,
    ThermostatComponent,
    Thermostat2Component,
    ThermoComponent,
    SteperComponent,
    ToastComponent,
    SpinnerComponent,
    Spinner2Component,
    Spinner3Component,
    SideNavComponent,
    BurgerDirective,
    TestComponent,
    DismissibleChipComponent,
    ChipwithinputComponent,
    MenuComponent,
    DividerComponent,
    NotificationComponent,
    NotificationItemComponent,
    DrawerComponent,
    RippleDirective,
    ImageAvatarsComponent,
    TextAvatarComponent,
    IconAvatarComponent,
    BackdropComponent,
    BasicBadgeComponent,
    OverflowBadgeComponent,
    ProgressBarComponent,
    CircularProgressComponent,
    SvgProgressBarComponent,
    SwitchComponent,
    DataSwitchComponent,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeatingThermostatComponent,
  ],
})
export class AppModule {}
