import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-switch',
  templateUrl: './data-switch.component.html',
  styleUrls: ['./data-switch.component.scss'],
})
export class DataSwitchComponent implements OnInit {


 // Declaring a ViewChild to access the overlay element
 @ViewChild('overlay') overlay?: ElementRef;

 // Injecting Renderer2 and ElementRef for DOM manipulation
 constructor(private renderer: Renderer2, private el: ElementRef) {}

 // Property to track the state of the checkbox
 isChecked: boolean = false;

 // Function to toggle the checkbox state

 toggleCheckbox() {
   // Toggle the isChecked property
   this.isChecked = !this.isChecked;

   const overlay = this.overlay?.nativeElement;

   // Checking if overlay is defined
   if (this.overlay) {
     // Add the 'active' class to trigger the overlay animation
     this.renderer.addClass(overlay, 'active');

     // Reset overlay animation to trigger it on every click
     overlay.style.animation = 'none';
     setTimeout(() => {
       this.overlay!.nativeElement.style.animation = '';
     }, 10);
   }
 }





  ngOnInit(): void {}
}
