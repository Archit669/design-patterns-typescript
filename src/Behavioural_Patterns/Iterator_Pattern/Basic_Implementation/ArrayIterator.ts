export class ArrayIterator<T>{

    private collection: T[];
    private iteratorIdx = 0;

    constructor(collection: T[]){
        this.collection = collection;
    }

    next(){
        if (this.iteratorIdx === this.collection.length){
            throw new Error("iterator index is out of range..");
        }

        return this.collection[this.iteratorIdx++];
    }

    hasNext(){
        return this.iteratorIdx !== this.collection.length;
    }
}