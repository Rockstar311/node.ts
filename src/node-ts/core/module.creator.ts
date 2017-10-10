import {bootstrap} from 'fluency-injection';
import {AppModuleConstructor} from "./interface/app.module";
import {Routing} from "./routing";
import * as express from 'express';

export function MainModuleCreator(module: AppModuleConstructor) {
    console.log('module creator');
    // console.log(module);
    for (let page of module.pageRoute) {
        bootstrap(page);
    }

    let appMain = express();
    appMain.listen(8080, () => {
        console.log('server start')
    });

    new Routing(module.routing, appMain);

    return function (target: Function) {
        target.prototype.app = appMain;
    }
}