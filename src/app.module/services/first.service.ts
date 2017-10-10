import { Injectable } from 'fluency-injection';

@Injectable
export class FirstService{
    public name = "123";

    constructor(){
        console.log('create');
    }
}