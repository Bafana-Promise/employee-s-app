/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class commonService {

    getperson(){
        return JSON.parse(sessionStorage.getItem("user"));
    }

}
