import {AppModuleConstructor} from "./interface/app.module";
import {Routing} from "./routing";
import * as express from 'express';
import { MainStart } from './start';

let appMain = express();
let appChild: any;
let isUseChild = false;

appMain.listen(8080, () => {
    console.log('server start')
});

export function AppModuleCreator(module: AppModuleConstructor) {
    console.log('module creator');

    new Routing(module.routing, appMain);
    isUseChild = true;

    // console.log(module);

    // for(let childModule of module.childModules){
    //     // console.log(childModule, 'child module');
    //     appChild = express();
    //     appMain.use(childModule.url, appChild);
    //     // MainStart(childModule.module);
    // }


    return function (target: Function) {
        target.prototype.app = appMain;
    }
}

export function PageCreator() {
  
    return function (target: Function) {
        // if(!isUseChild){
            target.prototype.app = appMain;
        // } else {
        //     target.prototype.app = appChild;
        // }
       
    }
}

