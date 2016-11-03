import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: '<app-addnetwork>',
    templateUrl: './app/addnetwork/add.network.component.html',
    styles: [`
    #logout {
    top:7%;
    left: 93%;
    transform: translate3d(-50%,-50%, 0);
    position: absolute;
    }
   
    `]
})


export class AddNetworkComponent {

    constructor(private router: Router, private http: Http) { }

    network = {
        name: '',
        description: ''
    };

    success: boolean = true;

    logout() {
        window.sessionStorage.removeItem('auth_key');
        this.router.navigate(['/login']);
    }

    enable() {
        this.success = true;
    }

    Save() {
        var token = window.sessionStorage.getItem('auth_key');

        var jsondata = { "name": this.network.name, "description": this.network.description };

        var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + token + '&url=/network';

        this.http.post(url, JSON.stringify(jsondata)).subscribe((data) => {
            if (data.status === 200) {
                console.log('done');
                this.success = false;
            }
        }
        )

    }

}