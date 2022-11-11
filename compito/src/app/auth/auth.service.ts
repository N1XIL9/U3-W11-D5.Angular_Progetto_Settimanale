import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false;

  constructor(private http: HttpClient) {
    localStorage.clear();
  }

  signIn(user: User) {
    this.isLogged = true;
    return this.http.post(environment.urlAPI + 'signin', user);
  }

  signUp(user: User) {
    return this.http.post(environment.urlAPI + 'users', user);
  }
}
