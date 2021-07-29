/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { commonService } from 'app/services/common/common.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { regLog } from 'app/sd-services/regLog';
import { dialogComponent } from '../dialogComponent/dialog.component';
import { MatDialog } from '@angular/material/dialog';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-admin',
    templateUrl: './admin.template.html'
})

export class adminComponent extends NBaseComponent implements OnInit {

    admin: any = {};
    users: any[] = [];
    showAddUser: boolean = false;

    constructor(private commonservice: commonService, private router: Router, private matsnackbar: MatSnackBar, private regLogService: regLog, private dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getUsers()
        this.admin = this.commonservice.getperson()

        if (!this.commonservice.getperson()) {
            console.log("hi hello")
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(["logreg"]);
        }
    }

    refreshPage() {
        window.location.reload();
    }

    logout() {
        sessionStorage.clear()
        this.router.navigate(["logreg"])
    };

    getUsers() {
        this.regLogService.getUser().then(res => {
            this.users = res.local.result;
            console.log(res);
        }, err => {
            this.matsnackbar.open("User not stored", "Close", {
                duration: 2500
            });
        })
    }


    // add users
    openRegDialog() {
        this.showAddUser = true;
        console.log(this.showAddUser)
        this.dialog.open(dialogComponent, {
            width: '390px', data: {
                bool: this.showAddUser
            }
        }
        ).afterClosed().subscribe(result => {
            if (result) {
                console.log(result)
                this.regLogService.registerUser(result).then(res => {
                    console.log(res);
                    this.getUsers();
                    this.matsnackbar.open("User Registered Successfully", "Close", {
                        duration: 2500
                    });
                }, err => {
                    this.matsnackbar.open("User not Registered", "Close", {
                        duration: 2500
                    });
                })

                console.log('The dialog was closed');

            }
        })

    };

    edit(user) {

        console.log(this.showAddUser)
        this.dialog.open(dialogComponent, {
            width: '390px', data: {
                userDetails: user,
                bool: this.showAddUser
            }
        }
        ).afterClosed().subscribe(result => {
            if (result) {
                result['_id'] = user['_id']
                console.log(result)
                this.regLogService.updateUser(result).then(res => {
                    console.log(res);
                    this.getUsers();
                    this.matsnackbar.open("User Updated Successfully", "Close", {
                        duration: 2500
                    });
                }, err => {
                    this.matsnackbar.open("User not Updated", "Close", {
                        duration: 2500
                    });
                })

                console.log('The dialog was closed');

            }
        })
    }

}
