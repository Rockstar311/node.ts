import { Express } from 'express-serve-static-core';
import {PageCreator} from "../../node-ts/core/page.creator";




@PageCreator()
export class ChildPage1 {

    private app: Express;
      
    constructor(){
        // console.log(this);
        
    }

    public callBack(req: any, res: any){
        console.log('children root ' + req.url);
        res.send('children root');
    }

}