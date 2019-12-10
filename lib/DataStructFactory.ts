import { Queue } from './Queue';
import { Stack } from './Stack';
import { DataStructure } from './DataStructure';

export class DataStructureFactory {

    public create(structType: DataStructure) {
        const is_Queue = structType === DataStructure.Queue;
        if(is_Queue)
            return new Queue();
        else
            return new Stack();
    }

}