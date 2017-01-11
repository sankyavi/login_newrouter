import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNetworkComponent} from './addnetwork/add.network.component' 
import { AuthManager } from './auth/auth.manager';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [AuthManager] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthManager] },
    { path: 'addnetwork', component: AddNetworkComponent, canActivate: [AuthManager] }
];

// canActivate is an array, we need to define a list of guard tokens that should be called
// We need to do is to define a list of guard tokens that should be called. 
// This also implies that we can have multiple guards protecting a single route.
// Guards are executed in the order they are defined on the route.