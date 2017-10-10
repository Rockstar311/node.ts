import { SecondService } from '../services/second.service';
import { FirstService } from '../services/first.service';
import { PageCreator } from '../../node-ts/core/module.creator';
import { Express } from 'express-serve-static-core';




@PageCreator()
export class RouteAbout {

    private app: Express;
      
    constructor( private secondService: SecondService,
    private firstService: FirstService){
        console.log(this);
    }

    public callBack(req: any, res: any){
        console.log('page about ' + req.url);
        res.send('about');
    }

}