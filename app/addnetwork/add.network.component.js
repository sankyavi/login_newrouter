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
var AddNetworkComponent = (function () {
    function AddNetworkComponent(router, http) {
        this.router = router;
        this.http = http;
        this.network = {
            name: '',
            description: ''
        };
        this.success = true;
    }
    AddNetworkComponent.prototype.logout = function () {
        window.sessionStorage.removeItem('auth_key');
        this.router.navigate(['/login']);
    };
    AddNetworkComponent.prototype.enable = function () {
        this.success = true;
    };
    AddNetworkComponent.prototype.Save = function () {
        var _this = this;
        var headers = new http_1.Headers();
        var token = window.sessionStorage.getItem('auth_key');
        var jsondata = { "name": this.network.name, "description": this.network.description };
        console.log(JSON.stringify(jsondata));
        var url = 'http://10.242.108.5:8088/AmhiCareWeb/CareRedirectServlet?token=' + token + '&url=/network';
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.http.post(url, JSON.stringify(jsondata)).subscribe(function (data) {
            if (data.status === 200) {
                console.log('done');
                _this.success = false;
            }
        });
    };
    AddNetworkComponent = __decorate([
        core_1.Component({
            selector: '<app-addnetwork>',
            templateUrl: './app/addnetwork/add.network.component.html',
            styles: ["\n    #logout {\n    top:5%;\n    left: 94%;\n    transform: translate3d(-50%,-50%, 0);\n    position: absolute;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AddNetworkComponent);
    return AddNetworkComponent;
}());
exports.AddNetworkComponent = AddNetworkComponent;
