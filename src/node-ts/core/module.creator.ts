import {AppModuleConstructor} from "./interface/app.module";
import {Routing} from "./routing";
import * as express from 'express';
import * as bodyParser from 'body-parser';

let appMain = express();
appMain.use(bodyParser.json())
let AllPages: any[] = [];


appMain.listen(8080, () => {
    console.log('server start')
});

export function AppModuleCreator(module: AppModuleConstructor) {

// Error when Page imported twice or in two module
    for (let newPage of module.pagesRoute) {
        for (let page of AllPages) {
            if (page.name == newPage.name) {
                throw new Error("Page imported twice or in two module");
            }
        }
        AllPages.push(newPage);
    }
// ===========================================================================

    // error when Page in Routing is missing in "pagesRoute"
    for (let routing of module.routing) {
        let isGood = false;
        for (let page of module.pagesRoute) {
            if (routing.page.name == page.name) {
                isGood = true;
            }
        }
        if (!isGood) throw new Error('Page in Routing is missing in "pagesRoute"');
        console.log(routing.page.name)
    }
    // ===================================================================================

    if (module.routing && module.routing.length) {
        if (!module.childUrl) {
            new Routing(module.routing, appMain);
        } else {
            console.log(module, 'children');
            let appChild = express();
            appChild.use(bodyParser.json())
            appMain.use(module.childUrl, appChild);
            new Routing(module.routing, appChild);
        }
    } else {
        throw new Error('Routing is empty')
    }
    return function (target: Function) {

    }
}



