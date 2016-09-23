"use strict";
var router_1 = require("@angular/router");
var app_routes_1 = require('./app.routes');
exports.appRouting = router_1.RouterModule.forRoot(app_routes_1.appRoutes, { useHash: true });
