import { Injectable } from 'fluency-injection';

@Injectable
export class SecondService{
    public name = "second";

    constructor(){
        console.log(this.name);
    }
}