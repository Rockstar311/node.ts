import { SecondService } from '../../services/second.service';
import { FirstService } from '../../services/first.service';
export declare class HomePage {
    private secondService;
    private firstService;
    private app;
    constructor(secondService: SecondService, firstService: FirstService);
    callBack(req: any, res: any): void;
}
