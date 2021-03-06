import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['./app/login/login.component.css']
})
export class LoginComponent {
  User = {
    username: '',
    password: ''
  };

  private error: boolean;
  private loader: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.loader = true;
    let checknow = this.auth.authenticateNow(this.User);
    checknow.then((res) => {
      if (res) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
        this.loader = false;
      }
    });
  }

}
