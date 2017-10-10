import { FirstService } from '../services/first.service';
export declare class RouteHome {
    private service;
    private app;
    constructor(service: FirstService);
    callBack(req: any, res: any): void;
}
