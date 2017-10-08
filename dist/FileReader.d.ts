/// <reference types="node" />
import { EventEmitter } from "events";
export declare class ReaderFile extends EventEmitter {
    private file;
    readDataFromFile(path: string, callback: (data: string) => void): void;
    private read();
}
