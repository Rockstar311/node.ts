import { PageCreator } from '../../node-ts/core/module.creator';
import { Express } from 'express-serve-static-core';




@PageCreator()
export class ChildPage2 {

    private app: Express;
      
    constructor(){
       
    }

    public callBack(req: any, res: any){
        console.log('page about ' + req.url);
        res.send('about');
    }

}