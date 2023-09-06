import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mockUsers } from './mock-data/mock-data'; // Adjust the path as needed


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any = null;

  constructor(private router: Router) {}

  // Simulate user login using mock data
  login(username: string, password: string): boolean {
    const user = mockUsers.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.loggedInUser !== null;
  }

  // Get the authenticated user's role
  getUserRole(): string | null {
    return this.isAuthenticated() ? this.loggedInUser.roles[0] : null;
  }

  // Logout the user
  logout(): void {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }
}


