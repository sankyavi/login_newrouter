import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers , URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	constructor(private router: Router , private http: Http) {}
	
	list : String[];
	token : any;
	error : boolean;
	loader : boolean;

	ngOnInit() {
	this.loader = true;
	var headers = new Headers();
    headers.append('Content-Type', 'application/json');
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	this.token = window.sessionStorage.getItem('auth_key');
	

	///network/list?pageNo=1&pageSize=10
    var creds = 'pageNo=' + 1 + '&pageSize=' + 5;
	//var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+''+'&url=/network/list?'+creds;
	var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+'&url=/network/list%3FpageNo=1%26pageSize=5';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

	// let params: URLSearchParams = new URLSearchParams();
 	// params.set('?token', this.token);
	// params.set('&url', '/network/list?');
 	// params.set('pageNo', '1' );
	// params.set('pageSize', '10' );

	return new Promise((String[]) => {
        this.http.get(url).subscribe((data) => {
           		console.log(data.json());
				this.loader = false;
				this.list = data.json();
				
            },(err: any) => { 
								if(err.status === 403){
								//alert("you dont have access");
								this.error = true; 
								Materialize.toast('You dont access to this service', 4000,'rounded')
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
