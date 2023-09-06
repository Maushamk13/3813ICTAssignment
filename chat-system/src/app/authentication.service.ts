import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registeredUrl = 'http://localhost:5000/api';
  private loggedInUser: any = null;

  constructor(private router: Router, private http: HttpClient) {}

  // Authenticate users using your server's API
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    // Make an HTTP POST request to your server's login endpoint
    return this.http.post<any>(`${this._registeredUrl}/login`, loginData).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle the unauthorized error here
          // You can display an error message to the user
          console.error('Login failed: Invalid credentials.');
        }
        return throwError(error);
      })
    );
  }

  isAuthenticated(): boolean {
    return this.loggedInUser !== null;
  }
  // Logout the user
  logout(): void {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }
}
