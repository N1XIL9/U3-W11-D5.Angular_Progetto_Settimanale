import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: User;
  users!: User[];

  constructor(private usersService: UsersService, private http: HttpClient) {}

  ngOnInit() {
    let userLogged = JSON.parse(localStorage.getItem('userLogged')!);
    this.usersService.getUser(userLogged.user.id).subscribe((data) => (this.user = data));
  }
}
