import {FirstService} from '../service/first.service'
import { Injectable } from 'fluency-injection';



@Injectable
export class RouteHome{


    constructor(private service: FirstService){
       
    }


    public callBack(req: any, res: any){
        console.log('page home ' + req.url);
        res.send('home');
    }

}