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
  username: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.isLoading = true; // Set loading indicator

    // Check if user data exists in local storage
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      this.isLoading = false; // Clear loading indicator
      this.errorMessage = 'User data not found. Please register first.';
      return;
    }

    // Retrieve user data from local storage
    const userData = JSON.parse(storedUserData);

    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Server Response:', response);
        this.isLoading = false; // Clear loading indicator
        
        // Check if 'usertype' exists and is an array with at least one element
        if (response['usertype'] && Array.isArray(response['usertype']) && response['usertype'].length > 0) {
          const userType = response['usertype'][0]; // Access the user type as an array element
          switch (userType) {
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
              this.errorMessage = 'Invalid user type received from server.';
              break;
          }
        } else {
          this.errorMessage = 'Invalid username or password. Please try again.';
        }
      },
      (error: any) => {
        this.isLoading = false; // Clear loading indicator
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password. Please try again.';
        } else {
          this.errorMessage = 'An error occurred while logging in. Please try again later.';
        }
      }
    );
    localStorage.removeItem(userData);
  }
}
