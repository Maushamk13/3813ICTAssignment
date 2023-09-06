import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private _registeredUrl = 'http://localhost:5000/api'; // Replace with your server's API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    // Replace with your actual registration API endpoint
    const registerUrl = `${this._registeredUrl}/register`;

    return this.http.post(registerUrl, userData);
  }
}
