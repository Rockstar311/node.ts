import {ROUTINGS} from './app.module/routings';
import {FirstService} from './services/first.service';
import {RouteUser} from './app.module/pages/user';
import {RouteAbout} from './app.module/pages/about';
import {AppModuleCreator} from './node-ts/core/module.creator';
import {RouteHome} from './app.module/pages/home';
import {ChildrenModule} from './children1.module/children1.module';
import {AdminModule} from "./admin.module/admin.module";


@AppModuleCreator({
    pagesRoute: [
        RouteAbout,
        RouteHome,
        RouteUser,
    ],
    provides: [
        FirstService
    ],
    routing: ROUTINGS,
    childModules: [
         ChildrenModule,
        AdminModule
    ]
})
export class AppModule {
}


