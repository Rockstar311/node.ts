import {MainModuleCreator} from "./node-ts/core/module.creator";
import {RouteAbout} from "./routing-page/about";
import {FirstService} from "./service/first.service";
import {ROUTINGS} from "./routings";
import {RouteHome} from "./routing-page/home";
import {RouteUser} from "./routing-page/user";

@MainModuleCreator({
    pageRoute: [
        RouteAbout,
        RouteHome,
        RouteUser,
    ],
    provides: [
        FirstService
    ],
    routing: ROUTINGS,
    childModules: []
})
export class AppModule {

}


