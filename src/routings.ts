import {Route} from './node-ts/core/interface/route';
import {ROUTING_PATH} from './routing-path'
import {RouteHome} from './routing-page/home';
import {RouteAbout} from './routing-page/about';

export const ROUTINGS: Route[] = [
    {url: ROUTING_PATH.HOME, method: 'GET', page: RouteHome},
    {url: ROUTING_PATH.ABOUT, method: 'GET', page: RouteAbout},
]


