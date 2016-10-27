import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http , Headers} from '@angular/http';

@Component({
    selector: '<app-addnetwork>',
    templateUrl: './app/addnetwork/add.network.component.html'
})


export class AddNetworkComponent {

    constructor(private router: Router , private http: Http) {}

    network = {
     name: '',
     description: ''
    };

    success:boolean =  true;

    logout(){
	window.sessionStorage.removeItem('auth_key');
	this.router.navigate(['/login']);
    }

    enable(){
	this.success = true;
    }

    Save() {
    var headers = new Headers();
       
    var token = window.sessionStorage.getItem('auth_key');

	var jsondata ={"name":this.network.name,"description":this.network.description};
    console.log(JSON.stringify(jsondata));

    

    var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+token+'&url=/network';

    headers.append('Content-Type', 'application/json');
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
   this.http.post(url, JSON.stringify(jsondata)).subscribe((data) => {
            if(data.status === 200) {
                console.log('done');
                this.success = false;
				}
            }
        )
  
  }

}