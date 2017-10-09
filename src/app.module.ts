import {moduleCreator} from "./node-ts/core/module.creator";
import {RouteAbout} from "./routing-page/about";
import {FirstService} from "./service/first.service";
import {ROUTINGS} from "./routings";

@moduleCreator({
    pageRoute: [
        RouteAbout
    ],
    provides: [
        FirstService
    ],
    routing: [
        ROUTINGS
    ],
    childModules: [

    ]
})
export class AppModule {
    public method(){

    }
}


