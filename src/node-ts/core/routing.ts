import {bootstrap} from 'fluency-injection';
import {Route} from './interface/route';
import {Express} from "express-serve-static-core";
import {APP} from '../../index';


export class Routing {

    private APP: Express | any;
    private routes: Route[];

    constructor(routes: Route[]) {
        this.APP = APP;
        console.log(routes);
        this.routes = routes;
        this.start()
    }

    private start(): void {
        for (const route of this.routes) {
            const method: string = this.checkMethod(route.method);
            const url: string = route.url;
            const page: any = bootstrap(route.page);
            this.APP.route(url)[method](page.callBack)
        }
    }

    private checkMethod(method: string): string {
        method = method.toLocaleLowerCase();
        switch (method){
            case 'get':{
                return 'get';
            }
            case 'post': {
                return 'post';
            }
            default: {
                 throw new Error('Type method is not correct');
            }
        }
    }
}