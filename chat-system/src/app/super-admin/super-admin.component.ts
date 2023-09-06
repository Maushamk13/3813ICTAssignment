import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Import the user service

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css'],
})
export class SuperAdminComponent implements OnInit {
  user: any; // Replace 'any' with your User interface
  allUsers: any[] = []; // Replace 'any' with your User interface

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Retrieve the user data from the service
    this.user = this.userService.getUser();

    // Check if the user is a Super Admin
    if (!this.user || !this.user.roles.includes('Super Admin')) {
      // Handle the case where the user is not a Super Admin
      // You can redirect or show an error message here
    }

    // In a real application, you would fetch all user data from your backend
    // For demonstration purposes, we'll add some example data here.
    this.allUsers = [
      // Sample user data
      {
        username: 'user1',
        // ... other user properties
      },
      {
        username: 'user2',
        // ... other user properties
      },
      // Add more users as needed
    ];
  }

  promoteToGroupAdmin(username: string): void {
    // Implement the logic to promote a user to Group Admin here
    // This could involve making an HTTP request to your server
    console.log(`Promoting ${username} to Group Admin...`);
  }

  // Example method to upgrade a user to Super Admin
  upgradeToSuperAdmin(username: string): void {
    // Implement the logic to upgrade a user to Super Admin here
    // This could involve making an HTTP request to your server
    console.log(`Upgrading ${username} to Super Admin...`);
  }

  // Function to remove a user
  removeUser(username: string): void {
    // Find the index of the user to remove
    const indexToRemove = this.allUsers.findIndex((user) => user.username === username);

    if (indexToRemove !== -1) {
      // Remove the user from the array
      this.allUsers.splice(indexToRemove, 1);
    }
  }
}

