// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  currentUser: any;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Retrieve the current user from local storage
    this.currentUser = this.localStorageService.get('mockUsers').find((user: any) => user.username === 'super');
  }
}
