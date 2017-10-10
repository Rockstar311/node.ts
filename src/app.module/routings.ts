import { RouteAbout } from './pages/about';
import { RouteHome } from './pages/home';
import { ROUTING_PATH } from './routing.path';
import { Route } from './../node-ts/core/interface/route';


export const ROUTINGS: Route[] = [
    {url: ROUTING_PATH.HOME, method: 'GET', page: RouteHome},
    {url: ROUTING_PATH.ABOUT, method: 'GET', page: RouteAbout},
];


