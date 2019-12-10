import { IDataScructure } from "./IDataStructure";

export class Stack<T> implements IDataScructure {

    _store: T[] = [];

    size(): number {
        return this._store.length;
    }
    enqueue(value: T) {
        this._store.push(value);
    }
    poll() {
        return this._store.pop();
    }
    peek(index: number) {
        return this._store[index];
    }
    isEmpty(): boolean {
        return this._store.length === 0;
    }
}