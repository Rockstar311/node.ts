import { FirstService } from '../service/first.service';
import { SecondService } from '../service/second.service';
export declare class RouteAbout {
    private secondService;
    private firstService;
    constructor(secondService: SecondService, firstService: FirstService);
    callBack(req: any, res: any): void;
}
