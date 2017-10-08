import {FirstService} from '../service/first.service'
import {SecondService} from '../service/second.service'
import { Injectable } from 'fluency-injection';



@Injectable
export class RouteAbout{

 
    constructor( private secondService: SecondService,
    private firstService: FirstService){

    }

    public callBack(req: any, res: any){
        console.log('page about ' + req.url);
        res.send('about');
    }

}