import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure {
         _store: T[] = [];

    public size(): number {
        return this._store.length;
    }
    
    public enqueue(value: T) {
        this._store.push(value)
    }

    public peek(index: number): T | undefined {  
        return this._store[index];
    }
    public poll() {
        return this._store.shift();
    }
    public isEmpty(): boolean {
        return this._store.length === 0;
    }

}