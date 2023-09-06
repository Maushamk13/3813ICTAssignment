import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Import the group service

@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css'],
})
export class GroupAdminComponent implements OnInit {
  user: any; // Replace 'any' with your User interface
  allGroups: any[] = []; // Replace 'any' with your Group interface

  constructor(private groupService: UserService) {}

  ngOnInit(): void {
    // Retrieve the user data from the service
    this.user = this.groupService.getUser();

    // Check if the user is a Group Admin
    if (!this.user || !this.user.roles.includes('Group Admin')) {
      // Handle the case where the user is not a Group Admin
      // You can redirect or show an error message here
    }

    // In a real application, you would fetch all group data from your backend
    // For demonstration purposes, we'll add some example data here.
    this.allGroups = [
      // Sample group data
      {
        name: 'Group 1',
        // ... other group properties
      },
      {
        name: 'Group 2',
        // ... other group properties
      },
      // Add more groups as needed
    ];
  }

  // Function to remove a group
  removeGroup(groupName: string): void {
    // Find the index of the group to remove
    const indexToRemove = this.allGroups.findIndex((group) => group.name === groupName);

    if (indexToRemove !== -1) {
      // Remove the group from the array
      this.allGroups.splice(indexToRemove, 1);
    }
  }
}
