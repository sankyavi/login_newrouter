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
        this.loader = true;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.token = window.sessionStorage.getItem('auth_key');
        ///network/list?pageNo=1&pageSize=10
        var creds = 'pageNo=' + 1 + '&pageSize=' + 5;
        //var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token='+this.token+''+'&url=/network/list?'+creds;
        var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + this.token + '&url=/network/list%3FpageNo=1%26pageSize=5';
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('?token', this.token);
        // params.set('&url', '/network/list?');
        // params.set('pageNo', '1' );
        // params.set('pageSize', '10' );
        return new Promise(function (String) {
            if (String === void 0) { String = []; }
            _this.http.get(url).subscribe(function (data) {
                console.log(data.json());
                _this.loader = false;
                _this.list = data.json();
            }, function (err) {
                if (err.status === 403) {
                    //alert("you dont have access");
                    _this.error = true;
                    Materialize.toast('You dont access to this service', 4000, 'rounded');
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
            templateUrl: './app/dashboard/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
