import { ChildPage2 } from './pages/children2.page';
import { ChildPage1 } from './pages/children.page';
import { Route } from './../node-ts/core/interface/route';

export const ROUTINGS: Route[] = [
    {url: '/', method: 'GET', page: ChildPage1 },
    {url: '/page2', method: 'GET', page: ChildPage2},
];