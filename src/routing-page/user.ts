
export class RouteUser{

    constructor(){
      
    }

    public callBack(req: any, res: any){
        console.log('page home ' + req.url);
        res.send('home');
    }

}