"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var auth_service_1 = require('./auth.service');
describe('Auth Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [auth_service_1.AuthService]
        });
    });
    it('should ...', testing_1.inject([auth_service_1.AuthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
