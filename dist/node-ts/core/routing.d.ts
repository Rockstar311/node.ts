import { Route } from './interface/route';
export declare class Routing {
    private APP;
    private routes;
    constructor(routes: Route[]);
    private start();
    private checkMethod(method);
}
