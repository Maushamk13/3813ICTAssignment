import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { mockUsers, mockGroups, mockChannels } from './mock-data/mock-data'; // Import mock data

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {};
  title = 'Chat-System';

  ngOnInit(): void {
    // Check if mock data is already stored, if not, store it
    if (!this.localStorageService.get('mockUsers')) {
      this.localStorageService.set('mockUsers', mockUsers);
    }

    if (!this.localStorageService.get('mockGroups')) {
      this.localStorageService.set('mockGroups', mockGroups);
    }

    if (!this.localStorageService.get('mockChannels')) {
      this.localStorageService.set('mockChannels', mockChannels);
    }
  }
}
