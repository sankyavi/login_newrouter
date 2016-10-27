import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  
  isAuthenticated: boolean = false;
  
  constructor(private http: Http) {}
  
  authenticateNow(usercreds) {
    var headers = new Headers();
    var jsondata ={"username":usercreds.username,"password":usercreds.password};

    headers.append('Content-Type', 'application/json');
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	

    return new Promise((resolve) => {
        this.http.post('http://10.242.108.5:8088/AmhiCareWeb/amhi/login', JSON.stringify(jsondata),{headers: headers}).subscribe((data) => {
            if(data.json().success) {
                window.sessionStorage.setItem('auth_key', data.json().token);
				
                this.isAuthenticated = true;
				}
            resolve(this.isAuthenticated);
            }
        )
    });
  }

}

