/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { regLog } from 'app/sd-services/regLog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { commonService } from 'app/services/common/common.service';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-logreg',
    templateUrl: './logreg.template.html'
})

export class logregComponent extends NBaseComponent implements OnInit {

    showLogin: boolean = false;
    submitted: boolean = false;
    foundUser: boolean = false;
    users: any[] = [];

    registerForm: FormGroup;
    loginForm: FormGroup;

    roles: any[] = [{
        id: "e",
        role: "Employee"
    }, {
        id: "a",
        role: "admin"
    }, {
        id: "s",
        role: "Super Admin"
    }];
    loggedUSer: any = {};

    loginUSer: any[] = [];

    constructor(private regLogService: regLog, private fb: FormBuilder, private matsnackbar: MatSnackBar, private router: Router, private common: commonService) {
        super();
        this.buildForm();
        this.buildFormlog();
    }

    ngOnInit() {
        this.getUsers()
        if(this.common.getperson()){
            this.router.navigate(['landingpage']);
        }

    }

    refreshPage() {
        window.location.reload();
    }

    registerUser(form) {
        if (form.valid) {

            this.regLogService.registerUser(form.value).then(res => {
                this.showLogin = false;
                this.getUsers();
                this.matsnackbar.open("User Registered Successfully", "Close", {
                    duration: 2500
                });
            }, err => {
                this.matsnackbar.open("User not Registered", "Close", {
                    duration: 2500
                });
            })
        } else {
            this.matsnackbar.open("Fill in your Credetials", "Close", {
                duration: 4500
            })
        }

    }

    buildForm() {
        this.registerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            role: ['', [Validators.required]],
            email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]],
            img: ['']
        })
    }

    login(form) {
        this.regLogService.getLoginUser(form.value).then(res => {
            this.loginUSer = res.local.result;
            console.log(this.loginUSer[0]);
            if(this.loginUSer.length == 0){  
                console.log("I ran Dude");
                   this.matsnackbar.open("Incorrect credentials", "Close", {
                    duration: 4500
                })
                return
                }
            if (form.value.email == this.loginUSer[0].email && form.value.password == this.loginUSer[0].password) {
                this.foundUser = true;
                this.loggedUSer = this.loginUSer[0];
                console.log(this.loggedUSer)
                sessionStorage.setItem("user", JSON.stringify(this.loginUSer[0]))
            }
            if (this.foundUser) {
                if (this.loggedUSer.role.role.includes("ad")) {
                    this.router.navigate(["admin"]);
                    console.log("hello")

                }
                else if (this.loggedUSer.role.role.includes("Super")) {
                    this.router.navigate(["superadmin"]);
                    console.log("hi")
                } else {
                    this.router.navigate(["landingpage"]);
                    console.log("ola")
                }

            }
            if (this.loginUSer == undefined) {
                this.matsnackbar.open("Incorrect credentials", "Close", {
                    duration: 4500
                })
            }
        });

    }

    buildFormlog() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]]
        })
    }

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

    fisrtLettertoUpperCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

}
