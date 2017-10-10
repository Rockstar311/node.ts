import {Route} from './interface/route';
import {Express} from "express-serve-static-core";


export class Routing {

    private APP: Express | any;
    private routes: Route[];

    constructor(routes: Route[], APP: Express| any) {
        this.APP = APP;
        // console.log(routes);
        this.routes = routes;
        this.start()
    }

    private start(): void {
        for (const route of this.routes) {
            console.log(route, "==================");
            const method: string = route.method.toLocaleLowerCase();
            const url: string = route.url;
            console.log(route.page)
            // this.APP.route(url)[method](route.page.callBack)
        }
    }

}