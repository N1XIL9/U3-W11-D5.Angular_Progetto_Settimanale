import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.AuthService.signUp(this.form.value);
  }
}
