export interface IDataScructure {
    size(): number;
    enqueue(value): void;
    poll(): any;
    peek(value): any;
    isEmpty(): boolean;
}