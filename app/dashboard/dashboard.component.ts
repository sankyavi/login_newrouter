import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers , URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html',
  styleUrls : ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private router: Router , private http: Http) {}
	
	list : String[];
	token : any;
	error : boolean;
	loader : boolean;
	empty : boolean;
	pageno : number;
	refresh : boolean;
	firstpage : boolean;
	lastpage : boolean;
	pagesize : number;
	role : any;


	ngOnInit() {
	this.loader = true;
	this.firstpage = true;
	this.pageno = 1;
	this.pagesize = 5;
	this.token = window.sessionStorage.getItem('auth_key');

	var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+'&url=/network/list%3FpageNo=1%26pageSize='+this.pagesize;

	return new Promise((String[]) => {
        this.http.get(url).subscribe((data) => {
           		console.log("on init"+data.json());
				this.loader = false;
				this.list = data.json();
				if(this.list.length === 0){
					this.empty =  true;
				}
            },(err: any) => { 
								if(err.status === 403){
									this.error = true; 
									Materialize.toast('You dont access to this service', 4000,'rounded');
								} else {
									Materialize.toast('Some unexpected error occured', 6000,'rounded');
								}
							}
        )
    });
	
	}

	logout(){
		window.sessionStorage.removeItem('auth_key');
		this.router.navigate(['/login']);
  	}

	toggle(num : number){
		this.pagesize = num;
	}



	pagination(input : number){
		this.loader = true;
		this.firstpage = false;
		this.lastpage = false;
		this.list = [];

		console.log(typeof(input));
		console.log("pageno"+this.pageno+"1s"+this.firstpage+"last"+this.lastpage);
		if(input === 0){
			this.pageno -= 1;
		}
		else if(input === 9999){
			this.pageno += 1;
		} else {
		this.pageno = input;
		}
		if(this.pageno === 1){
			this.firstpage = true;
		}
		if(this.pageno === 5){
			this.lastpage = true;
		}
		console.log("pageno"+this.pageno+"1s"+this.firstpage+"last"+this.lastpage+"pagesize"+this.pagesize);
		this.token = window.sessionStorage.getItem('auth_key');
		var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+'&url=/network/list%3FpageNo='+this.pageno+'%26pageSize='+this.pagesize;

		return new Promise((String[]) => {
			this.http.get(url).subscribe((data) => {
					console.log("pagination"+data.json());
					this.loader = false;
					this.list = data.json();
					if(this.list.length === 0){
						this.empty =  true;
					}else{
						this.empty =  false;
					}
				},(err: any) => { 
									if(err.status === 403){
										this.error = true; 
										Materialize.toast('You dont access to this service', 4000,'rounded');
									} else {
										Materialize.toast('Some unexpected error occured', 6000,'rounded');
									}
								}
			)
		});
  	}

}
