"use strict";
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var auth_manager_1 = require('./auth/auth.manager');
exports.appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [auth_manager_1.AuthManager] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_manager_1.AuthManager] }
];
