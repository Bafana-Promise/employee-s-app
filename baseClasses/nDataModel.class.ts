import { user } from '../src/app/models/user.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
//CREATE NEW DM INSTANCE
    }
}