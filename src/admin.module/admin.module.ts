
import { AppModuleCreator } from '../node-ts/core/module.creator';
import {ROUTINGS} from "./routings";
import {HomePage} from "./pages/home.page";
import {InnerPage} from "./pages/inner.page";


@AppModuleCreator({
    pagesRoute: [
        HomePage,
        InnerPage
    ],
    routing: ROUTINGS,
    childUrl: '/admin'
})
export class AdminModule {}
