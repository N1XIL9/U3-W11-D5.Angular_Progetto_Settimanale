import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  @ViewChild('f') form!: NgForm;
  ngOnInit(): void {}

  onSubmit() {
    return this.authService.signIn(this.form.value).subscribe((ok) => {
      this.router.navigate(['/home']);
      localStorage.setItem('userLogged', JSON.stringify(ok));
    });
  }
}
