import { Component } from '@angular/core';
import { UserService } from '../user.service'; // Import the user service

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css'],
})
export class ChatUserComponent {
  newUser: any = {}; // Replace 'any' with your User interface

  constructor(private userService: UserService) {}

  registerUser(): void {
    // Implement user registration logic here
    // Send the newUser object to your server or update your local data

    // Example: Add the newUser to a local array of users
   // this.userService.addUser(this.newUser);
    
    // Clear the form after registration
    this.newUser = {};
  }
}

