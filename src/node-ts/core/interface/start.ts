import * as express from 'express';
export function  Start(module: any) {

    module.prototype =  express();
    console.log(module.prototype);

}

APP.listen(8080, () => {
    console.log('server start')
});

