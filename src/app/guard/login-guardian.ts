import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginGuardian implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate() {
        if (this.authService.isAuth()) {
            return true;
        }
        else 
        {
            this.router.navigate(['auth'])
            return false;
        }
    }
}