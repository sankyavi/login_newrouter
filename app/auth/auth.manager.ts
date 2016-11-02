import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthManager implements CanActivate {
    
    constructor(private router: Router) {}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(next.url[0].path == 'login'){
            if(window.sessionStorage.getItem('auth_key')){
                console.log('You are already logged in');
                Materialize.toast('You are already logged in', 4000,'rounded');
                return false;
            }
            else {
                return true;
            }
        }
        
        if(window.sessionStorage.getItem('auth_key')) {
            return true;
        }
        
        console.log('You must be logged in');
        Materialize.toast('You must be logged in', 4000,'rounded');
        this.router.navigate(['/login']);
        return false;
    }

}
