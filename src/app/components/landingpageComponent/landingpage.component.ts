/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { commonService } from 'app/services/common/common.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dialogComponent } from '../dialogComponent/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regLog } from 'app/sd-services/regLog';


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-landingpage',
    templateUrl: './landingpage.template.html'
})

export class landingpageComponent extends NBaseComponent implements OnInit {

    user: any = {};
    uploadImg: FormGroup;
    uploadedUserImg
    fileSelected?: Blob;
    base64: string = "";
    imageUrl: string;
    users: any[] = [];
    imageChanged: boolean = false;
    constructor(private commonservice: commonService, private router: Router, private matsnackbar: MatSnackBar, private dialog: MatDialog, public sanitizer: DomSanitizer, private fb: FormBuilder, private regLogService: regLog) {
        super();
        this.buildForm();

    }

    ngOnInit() {
        this.user = this.commonservice.getperson();

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


employeeUpdate(user) {

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

    buildForm() {
        this.uploadImg = this.fb.group({
            img: ['', [Validators.required]]
        })
    }


    upLoadImg() {
        let reader = new FileReader();
        reader.readAsDataURL(this.fileSelected as Blob);
        reader.onloadend = () => {
            this.base64 = reader.result as string;
            this.user['img'] = this.base64;
            this.regLogService.updateUser(this.user).then(res => {
                console.log(res);
                this.getUsers();
                sessionStorage.setItem('user', JSON.stringify(this.user));
                this.matsnackbar.open("User Updated Successfully", "Close", {
                    duration: 2500
                });
            }, err => {
                this.matsnackbar.open("User not Updated", "Close", {
                    duration: 2500
                });
            })
        }
    }

    onSelectedNewFile(files: fileList): void {
        this.fileSelected = files[0];
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected));
        this.imageChanged = true;
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

 getImgContent(): SafeUrl {
     if(this.imageChanged){
         return this.imageUrl;
     }
     else if(this['user']['img']){
         return this.sanitizer.bypassSecurityTrustUrl(this['user']['img']);
     } else{
         return 'assets/Web/Icons/dummyImage.jpg'
     }
        
    }

    // convertImgToBase64($event): void {
    //     this.readFile($event.target);
    //     console.log(this.readFile($event.target));
    // }

    // readFile(inputValue: any): void {
    //     let file: File = inputValue.files[0];
    //     let myReader: FileReader = new FileReader();

    //     myReader.onloadend = e => {
    //         this.imagePath = myReader.result;
    //         console.log(myReader.result);
    //     };
    //     myReader.readAsDataURL(file);
    // }

   


}
