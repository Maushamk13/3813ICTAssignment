import { Component } from '@angular/core';
import { AuthService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  username: string = ''; // Declare the username property
  password: string = ''; // Declare the password property

  constructor(private authService: AuthService, private router: Router) {}

  // Add login logic here
  login(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);

    if (isLoggedIn) {
      // Redirect to the appropriate dashboard based on user role
      switch (this.authService.getUserRole()) {
        case 'Super Admin':
          this.router.navigate(['/super-admin']);
          break;
        case 'Group Admin':
          this.router.navigate(['/group-admin']);
          break;
        case 'Chat User':
          this.router.navigate(['/chat-user']);
          break;
        default:
          // Handle other roles or errors here
          break;
      }
    } else {
      // Authentication failure: Show an error message
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
