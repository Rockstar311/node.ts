
import * as express from 'express';
import { Routing } from './node-ts/core/routing'
import {Express} from "express-serve-static-core";
import {ROUTINGS} from './routings';


export const APP: Express = express();

new Routing(ROUTINGS);


APP.listen(8080, () => {
    console.log('server strt on port 8080')
})