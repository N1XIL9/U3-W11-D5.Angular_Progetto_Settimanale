import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
];

@NgModule({
  declarations: [LoginPage, SignupPage],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class AuthModule {}
