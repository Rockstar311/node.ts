import {Route} from "../node-ts/core/interface/route";
import {HomePage} from "./pages/home.page";
import {InnerPage} from "./pages/inner.page";

export const ROUTINGS: Route[] = [
    {url: '/', method: 'GET', page: HomePage},
    {url: '/inner', method: 'GET', page: InnerPage},
];