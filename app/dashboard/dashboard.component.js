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
        this.firstpage = true;
        this.pageno = 1;
        this.pagesize = 5;
        this.token = window.sessionStorage.getItem('auth_key');
        var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + this.token + '&url=/network/list%3FpageNo=1%26pageSize=' + this.pagesize;
        return new Promise(function (String) {
            if (String === void 0) { String = []; }
            _this.http.get(url).subscribe(function (data) {
                console.log("on init" + data.json());
                _this.loader = false;
                _this.list = data.json();
                if (_this.list.length === 0) {
                    _this.empty = true;
                }
            }, function (err) {
                if (err.status === 403) {
                    _this.error = true;
                    Materialize.toast('You dont access to this service', 4000, 'rounded');
                }
                else {
                    Materialize.toast('Some unexpected error occured', 6000, 'rounded');
                }
            });
        });
    };
    DashboardComponent.prototype.logout = function () {
        window.sessionStorage.removeItem('auth_key');
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.toggle = function (num) {
        this.pagesize = num;
    };
    DashboardComponent.prototype.pagination = function (input) {
        var _this = this;
        this.loader = true;
        this.firstpage = false;
        this.lastpage = false;
        this.list = [];
        console.log(typeof (input));
        console.log("pageno" + this.pageno + "1s" + this.firstpage + "last" + this.lastpage);
        if (input === 0) {
            this.pageno -= 1;
        }
        else if (input === 9999) {
            this.pageno += 1;
        }
        else {
            this.pageno = input;
        }
        if (this.pageno === 1) {
            this.firstpage = true;
        }
        if (this.pageno === 5) {
            this.lastpage = true;
        }
        console.log("pageno" + this.pageno + "1s" + this.firstpage + "last" + this.lastpage + "pagesize" + this.pagesize);
        this.token = window.sessionStorage.getItem('auth_key');
        var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + this.token + '&url=/network/list%3FpageNo=' + this.pageno + '%26pageSize=' + this.pagesize;
        return new Promise(function (String) {
            if (String === void 0) { String = []; }
            _this.http.get(url).subscribe(function (data) {
                console.log("pagination" + data.json());
                _this.loader = false;
                _this.list = data.json();
                if (_this.list.length === 0) {
                    _this.empty = true;
                }
                else {
                    _this.empty = false;
                }
            }, function (err) {
                if (err.status === 403) {
                    _this.error = true;
                    Materialize.toast('You dont access to this service', 4000, 'rounded');
                }
                else {
                    Materialize.toast('Some unexpected error occured', 6000, 'rounded');
                }
            });
        });
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
