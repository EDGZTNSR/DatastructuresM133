import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const tqueue = new Queue();
            const result = tqueue.size();
            expect(result).to.equal(0);
        })
        it("can increase size", () => {
            const tqueue = new Queue();
            tqueue.enqueue("value");
            const result = tqueue.size();
            expect(result).to.be.equal(1);
        });

        it("is empty", () => {
            const tqueue = new Queue();
            const result = tqueue.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("isn't empty", () => {
            const tqueue = new Queue();
            tqueue.enqueue("value");
            const result = tqueue.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek item", () => {
            const tqueue = new Queue();
            tqueue.enqueue("value");
            const result = tqueue.peek(0);
            expect(result).to.be.equal("value");
        });

        it("poll item", () => {
            const tqueue = new Queue();
            tqueue.enqueue("value1");
            tqueue.enqueue("value2");
            const result = tqueue.poll();
            expect(result).to.be.equal("value1");
        })
    })
    
    describe("Stack", () => {
        it("has size", () => {
            const tstack = new Stack();
            const result = tstack.size();
            expect(result).to.equal(0);
        })
        it("can increase size", () => {
            const tstack = new Stack();
            tstack.enqueue("value");
            const result = tstack.size();
            expect(result).to.be.equal(1);
        });

        it("is empty", () => {
            const tstack = new Stack();
            const result = tstack.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("isn't empty", () => {
            const tstack = new Stack();
            tstack.enqueue("value");
            const result = tstack.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek item", () => {
            const tstack = new Stack();
            tstack.enqueue("value");
            const result = tstack.peek(0);
            expect(result).to.be.equal("value");
        });

        it("poll item", () => {
            const tstack = new Stack();
            tstack.enqueue("value1");
            tstack.enqueue("value2");
            const result = tstack.poll();
            expect(result).to.be.equal("value2");
        })
    })
})