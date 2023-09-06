import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {};
  title = 'Chat-System';
  isLoggedIn: boolean = false;

  ngOnInit(): void {
}
}
