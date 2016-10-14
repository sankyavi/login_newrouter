import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private router: Router , private http: Http) {}
	
	list : String[];
	token : any;
	error : boolean;

	ngOnInit() {
	var headers = new Headers();
    headers.append('Content-Type', 'application/json');
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	this.token = window.sessionStorage.getItem('auth_key');
	


	return new Promise((String[]) => {
        this.http.get('http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+''+'&url=/network/list').subscribe((data) => {
           		console.log(data.json());
				this.list = data.json();
				
            },(err: any) => { 
								//console.log(err.status); 	
								//console.log(err);
								if(err.status === 403){
									//alert("you dont have access");
									this.error = true; 
								}
							}
        )
    });
	
	}
  
	

	logout(){
		window.sessionStorage.removeItem('auth_key');
		this.router.navigate(['/login']);
  }

}
