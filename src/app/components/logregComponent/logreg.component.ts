/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { regLog } from 'app/sd-services/regLog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    loggedUSer: any = {}

    constructor(private regLogService: regLog, private fb: FormBuilder, private matsnackbar: MatSnackBar, private router: Router) {
        super();
        this.buildForm();
        this.buildFormlog();
    }

    ngOnInit() {
        this.getUsers()

    }

    refreshPage() {
        window.location.reload();
    }

    registerUser(form) {
        console.log(form.value)
        if (form.valid) {

            this.regLogService.registerUser(form.value).then(res => {
                this.showLogin = false;
                this.getUsers()
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
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]],
            img:['']
        })
    }

    login(form) {
        console.log(form.value)
        this.users.forEach(user => {
            if (form.value.email == user.email && form.value.password == user.password) {
                this.foundUser = true;
                this.loggedUSer = user;
                console.log(this.loggedUSer)
                sessionStorage.setItem("user", JSON.stringify(user))
            }
        })
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
        if (!this.foundUser) {
            this.matsnackbar.open("INcorrect credentials", "Close", {
                duration: 4500
            })
        }
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
