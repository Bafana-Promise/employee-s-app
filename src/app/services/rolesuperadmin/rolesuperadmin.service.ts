/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { commonService } from 'app/services/common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class rolesuperadminService implements CanActivate{
      constructor(private common: commonService, private router: Router,private matsnackbar: MatSnackBar){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = this.common.getperson();
        if (user) {
            if (user.role.id.includes('s')) {
                return true;
            }
            else {
                this.matsnackbar.open("You're not authorised to this page", 'Close', {
                    duration: 4500
                });
                this.router.navigate(['landingpage']);
                return false;
            }
        } else if (!user) {
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(['logreg']);
        }
  }

}
