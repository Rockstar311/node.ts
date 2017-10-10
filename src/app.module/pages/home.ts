import { Express } from 'express-serve-static-core';
import { FirstService } from '../services/first.service';
import { PageCreator } from '../../node-ts/core/module.creator';



@PageCreator()
export class RouteHome{

    private app: Express;

    constructor(private service: FirstService){
       
    }


    public callBack(req: any, res: any){
        console.log('page home ' + req.url);
        res.send('home');
    }

}