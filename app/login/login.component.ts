import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['./app/login/login.component.css']
})
export class LoginComponent implements OnInit {
  localUser = {
     username: '',
     password: ''
  };
  
  private error : boolean;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  
  login() {
    console.log('localUser', this.localUser);
    let checknow = this.auth.authenticateNow(this.localUser);
    checknow.then((res) => {
      if(res) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
      }
    });    
  }

}
