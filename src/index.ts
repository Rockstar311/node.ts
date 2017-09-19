import {EventEmitter} from "events";
import {Main} from "./main";


let main2 = Main;
let emitter = new EventEmitter();

emitter.on('click', () => {
    console.log("click");
});

emitter.emit('click');




