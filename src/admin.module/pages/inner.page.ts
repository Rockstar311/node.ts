import { SecondService } from '../../services/second.service';
import { FirstService } from '../../services/first.service';
import { Express } from 'express-serve-static-core';
import {PageCreator} from "../../node-ts/core/page.creator";




@PageCreator()
export class InnerPage {

    private app: Express;

    constructor( private secondService: SecondService,
                 private firstService: FirstService){
        // console.log(this);
    }

    public callBack(req: any, res: any){
        console.log('admin home page inner ' + req.url);
        res.send('admin home page inner');
    }

}