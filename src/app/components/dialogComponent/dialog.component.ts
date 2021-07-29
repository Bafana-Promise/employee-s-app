/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    selector: 'bh-dialog',
    templateUrl: './dialog.template.html'
})

export class dialogComponent extends NBaseComponent implements OnInit {

    submitted: boolean = false;
    registerForm: FormGroup;
    roles: any[] = [{
        id: "e",
        role:"Employee"
    },{
        id: "a",
        role:"admin"
    },{
        id: "s",
        role:"Super Admin"
    }];

    constructor(public dialogRef: MatDialogRef<dialogComponent>, private fb: FormBuilder,
        private matsnackbar: MatSnackBar, private commonservice: commonService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
      this.buildForm();
    }

    ngOnInit() {
        console.log(this.data)
        if(!this.data.bool){
            this.patchUser()
        }

        this.commonservice.getperson()

        if (!this.commonservice.getperson()) {
            console.log("hi hello")
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(["logreg"]);
        }
        console.log(this.data)
    }

registerUser(form) {
    console.log(form.value)
      this.submitted = true;
      if (!form.valid) {
            return false
        }
    }

update(form){
    console.log(form.value)
      this.submitted = true;
      if (!form.valid) {
            return false
        }

}

patchUser(){
    let userRole;
    this.roles.forEach(obj => {
    if(this.data.role.id == obj.role.id){
        userRole = obj;
    }
    });
    // this.roles = [this.data.userDetails.role]
    this.registerForm.patchValue({
            firstName: this.data.userDetails.firstName,
            lastName: this.data.userDetails.lastName,
            role:[userRole],
            email: this.data.userDetails.email,
            password: this.data.userDetails.password,
            img: this.data.userDetails.img      
    })
    
}

buildForm(){
        this.registerForm = this.fb.group({
            firstName:['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName:['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            role:['',[Validators.required]],
            email:['', [Validators.required, Validators.email]],
            password:['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]],
            img:['']

        })
    }

fisrtLettertoUpperCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

dropdown(){
    this.roles;
    this.roles.forEach(role => {
    console.log(role.role);
    });
}


}
