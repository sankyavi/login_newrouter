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
