import { Express } from 'express-serve-static-core';
import {PageCreator} from "../../node-ts/core/page.creator";


@PageCreator()
export class RouteUser{

    private app: Express;

    constructor(){
      
    }

    public callBack(req: any, res: any){
        console.log('page home ' + req.url);
        res.send('user');
    }

}