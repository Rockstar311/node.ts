import { ROUTINGS } from './app.module/routings';
import { FirstService } from './app.module/services/first.service';
import { RouteUser } from './app.module/pages/user';
import { RouteAbout } from './app.module/pages/about';
import { AppModuleCreator } from './node-ts/core/module.creator';
import { RouteHome } from './app.module/pages/home';
import { ChildrenModule } from './children1.module/children1.module';



@AppModuleCreator({
    childModules: [
         {url: 'children', module: ChildrenModule}
    ],
    pageRoute: [
        RouteAbout,
        RouteHome,
        RouteUser,
    ],
    provides: [
        FirstService
    ],
    routing: ROUTINGS,
   
})
export class AppModule {}


