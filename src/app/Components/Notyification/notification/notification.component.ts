import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'translateY(-100px)' })
        ),
      ]),
    ]),
  ],
})
export class NotificationComponent {
  notifications: any[] = [];
  showNotification: boolean[] = [];
  num: number = 1;

  resetNotifications() {
    this.notifications = [];
    this.showNotification = [];
  }

  addNotification() {
    const newItem = this.generateRandomMessage();
    const newIndex = 0; // Index of the newest notification

    // Add the new notification
    this.notifications.push({ content: newItem, index: newIndex });

    // Update indices of other notifications
    this.notifications.forEach((notification, index) => {
      notification.index = index;
    });

    // Update showNotification array to match the notifications array
    this.showNotification.unshift(true);

    setTimeout(() => {
      this.showNotification[newIndex] = false;

      setTimeout(() => {
        this.notifications.shift(); // Remove the first item from the array (which is now the oldest notification)
        this.showNotification.shift(); // Remove the corresponding showNotification flag

        // Update the indices of the remaining notifications
        this.notifications.forEach((notification, index) => {
          notification.index = index;
        });

        // Check if notifications array is empty, if so, reset it
        if (this.notifications.length === 0) {
          this.resetNotifications();
        }
      }, 1000);
    }, 5000);
  }

  // generate a random message

  generateRandomMessage() {
    const messages = [
      'Hello!',
      'How are you?',
      'Have a great day!',
      "Don't forget to smile!",
      'Stay positive!',
      "You're awesome!",
      'Keep up the good work!',
      'Good morning!',
      'Good afternoon!',
      'Good evening!',
      "Hope you're doing well!",
      'Sending positive vibes your way!',
      "You're capable of amazing things!",
      'Believe in yourself!',
      'Dream big!',
      'Make today amazing!',
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
}
