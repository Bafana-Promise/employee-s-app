/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { commonService } from 'app/services/common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class roleService implements CanActivate{
      constructor(private common: commonService, private router: Router,private matsnackbar: MatSnackBar){}
  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = this.common.getperson();
      if(user.role.role.includes('Admin' || 'Super Admit')){
        return true;
      } else {
        this.matsnackbar.open("You're not authorised to this page", 'Close', {
                duration: 4500
        });
        this.router.navigate(['logreg']);
        return false;
      }
  }

}