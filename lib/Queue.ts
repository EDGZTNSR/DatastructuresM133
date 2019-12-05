import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure {
         _store: T[] = [];

    public size(): number {
        return this._store.length;
    }
    
    public push(value: T) {
        this._store.push(value)
    }

    public pop(): T | undefined {
        return this._store.shift();
    }

}