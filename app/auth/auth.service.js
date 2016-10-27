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
var http_1 = require('@angular/http');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    AuthService.prototype.authenticateNow = function (usercreds) {
        var _this = this;
        var headers = new http_1.Headers();
        var jsondata = { "username": usercreds.username, "password": usercreds.password };
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return new Promise(function (resolve) {
            _this.http.post('http://10.242.108.5:8088/AmhiCareWeb/amhi/login', JSON.stringify(jsondata), { headers: headers }).subscribe(function (data) {
                if (data.json().success) {
                    window.sessionStorage.setItem('auth_key', data.json().token);
                    _this.isAuthenticated = true;
                }
                resolve(_this.isAuthenticated);
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
