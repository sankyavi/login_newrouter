"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var DashboardComponent = (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.token = window.sessionStorage.getItem('auth_key');
        return new Promise(function (String) {
            if (String === void 0) { String = []; }
            _this.http.get('http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + _this.token + '' + '&url=/network/list').subscribe(function (data) {
                console.log(data.json());
                _this.list = data.json();
            }, function (err) {
                //console.log(err.status); 	
                //console.log(err);
                if (err.status === 403) {
                    //alert("you dont have access");
                    _this.error = true;
                }
            });
        });
    };
    DashboardComponent.prototype.logout = function () {
        window.sessionStorage.removeItem('auth_key');
        this.router.navigate(['/login']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './app/dashboard/dashboard.component.html',
            styleUrls: ['./app/dashboard/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
