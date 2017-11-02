import { ChildPage2 } from './pages/children2.page';
import { ChildPage1 } from './pages/children.page';
import { AppModuleCreator } from '../node-ts/core/module.creator';
import { ROUTINGS } from './routings';


@AppModuleCreator({
    pagesRoute: [
        ChildPage1,
        ChildPage2,
    ],
    routing: ROUTINGS,
    childUrl: '/children'
})
export class ChildrenModule {}
