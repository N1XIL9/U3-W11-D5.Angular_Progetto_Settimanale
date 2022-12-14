import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './classes/user.class';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {}

  getUser(id: number) {
    return this.http.get<User>(environment.urlAPI + 'users/' + id);
  }
}
