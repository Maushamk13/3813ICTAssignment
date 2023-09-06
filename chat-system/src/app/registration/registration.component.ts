import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData: any = {
    username: '',
    email: '',
    password: '',
    group: null,
    channel: null,
    usertype: null,
  };

  registrationCompleted: boolean = false; // Track registration completion

  constructor(private registrationService: RegistrationService) {}

  onRegister(): void {
    // Check if required fields are provided
    if (!this.userData.username || !this.userData.password) {
      console.error('Please provide both username and password.');
      return;
    }
    
    // Convert the selected user type to an array if it's not already
    if (!Array.isArray(this.userData.usertype)) {
      this.userData.usertype = [this.userData.usertype];
    }

    this.registrationService.registerUser(this.userData).subscribe(
      (response: any) => {
        // Handle the successful registration response (if needed)
        console.log('Registration successful:', response);

        // Set registrationCompleted to true to display the message
        this.registrationCompleted = true;

        // Reset the userData object and form
        this.userData = {
          username: '',
          email: '',
          password: '',
          group: null,
          channel: null,
          usertype: null,
        };
      },
      (error: any) => {
        // Handle registration error (if needed)
        console.error('Registration error:', error);
      }
    );
  }

  // Function to hide the registration message
  hideRegistrationMessage(): void {
    this.registrationCompleted = false;
  }
}





