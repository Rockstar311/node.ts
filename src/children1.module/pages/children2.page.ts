import { Express } from 'express-serve-static-core';
import {PageCreator} from "../../node-ts/core/page.creator";


@PageCreator()
export class ChildPage2 {

    private app: Express;
      
    constructor(){
       
    }

    public callBack(req: any, res: any){
        console.log('children 2 ' + req.url);
        res.send('children 2');
    }

}