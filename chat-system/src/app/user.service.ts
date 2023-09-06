// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any; // Replace 'any' with your User interface

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
