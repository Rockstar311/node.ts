import { PageCreator } from '../../node-ts/core/module.creator';
import { Express } from 'express-serve-static-core';




@PageCreator()
export class ChildPage1 {

    private app: Express;
      
    constructor(){
        console.log(this);
        
    }

    public callBack(req: any, res: any){
        console.log('page about ' + req.url);
        res.send('about');
    }

}