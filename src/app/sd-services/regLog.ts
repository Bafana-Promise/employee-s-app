/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class regLog {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_regLog

  async registerUser(form: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_nE1xK28ZAbZT0lB3(bh);
      //appendnew_next_registerUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z1aB9sjnY50kP3KZ');
    }
  }

  async getUser(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_YrdU8caqFO3jsfGS(bh);
      //appendnew_next_getUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gOlROoIaPuJHXz4J');
    }
  }

  async removeUser(id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_7sxWlY8v1AQnMnyw(bh);
      //appendnew_next_removeUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SchQepMVO6nstELm');
    }
  }

  async updateUser(body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_1D7d3X05klNekvs4(bh);
      //appendnew_next_updateUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ptixRV3uSHwTDjwZ');
    }
  }

  async getLoginUser(form: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_2JeMDgJzfFXGSkay(bh);
      //appendnew_next_getLoginUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_apiFHHR1GeW0UMwt');
    }
  }

  //appendnew_flow_regLog_start

  async sd_nE1xK28ZAbZT0lB3(bh) {
    try {
      bh.local.result = {};

      console.log(bh.input);
      bh = await this.sd_LY7RFIqFuK2lVLE7(bh);
      //appendnew_next_sd_nE1xK28ZAbZT0lB3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nE1xK28ZAbZT0lB3');
    }
  }

  async sd_LY7RFIqFuK2lVLE7(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `registeruser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_LY7RFIqFuK2lVLE7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LY7RFIqFuK2lVLE7');
    }
  }

  async sd_YrdU8caqFO3jsfGS(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_YrdU8caqFO3jsfGS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YrdU8caqFO3jsfGS');
    }
  }

  async sd_7sxWlY8v1AQnMnyw(bh) {
    try {
      bh.local.result = {};
      bh.input.query = {
        id: bh.input.id,
      };
      console.log(bh.input);
      bh = await this.sd_qd09OYgFHfnSVlnO(bh);
      //appendnew_next_sd_7sxWlY8v1AQnMnyw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7sxWlY8v1AQnMnyw');
    }
  }

  async sd_qd09OYgFHfnSVlnO(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteUser/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_qd09OYgFHfnSVlnO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qd09OYgFHfnSVlnO');
    }
  }

  async sd_1D7d3X05klNekvs4(bh) {
    try {
      bh.local.result = {};
      bh.input.query = {
        id: bh.input.id,
      };
      console.log(bh.input);
      bh = await this.sd_qWZLFjourcvQP6Xm(bh);
      //appendnew_next_sd_1D7d3X05klNekvs4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1D7d3X05klNekvs4');
    }
  }

  async sd_qWZLFjourcvQP6Xm(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateUser/${bh.input.body._id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_qWZLFjourcvQP6Xm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qWZLFjourcvQP6Xm');
    }
  }

  async sd_2JeMDgJzfFXGSkay(bh) {
    try {
      console.log(bh);
      bh = await this.sd_GayXW0KTvwtvUg7K(bh);
      //appendnew_next_sd_2JeMDgJzfFXGSkay
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2JeMDgJzfFXGSkay');
    }
  }

  async sd_GayXW0KTvwtvUg7K(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `loginUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_GayXW0KTvwtvUg7K
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GayXW0KTvwtvUg7K');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_regLog_Catch
}
