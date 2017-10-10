import { ChildModule } from './../../../../dist/node-ts/core/interface/child.module.d';
export interface AppModuleConstructor {
    pageRoute: any[];
    provides: any[];
    routing: any;
    childModules: ChildModule[]
}