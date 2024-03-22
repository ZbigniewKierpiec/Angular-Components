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
import { CheckComponent } from './Components/BUTTONS/Animated-Svg-Check/Check/check/check.component';
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
    CheckComponent,
    PathDirective,
    AnimatedSliderComponent,
    ChipComponent,
    AcordionComponent,
    TabsComponent,
    ThermostatComponent,
    Thermostat2Component,
    ThermoComponent,
    SteperComponent,



  ],
  imports: [BrowserModule, FormsModule,  BrowserAnimationsModule, ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
