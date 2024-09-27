import { UserCollection } from "./Collection";
import { User } from "./User";

interface MyIteratorResult<T>{
    value:T | null;
    done:boolean
}

export interface MyIterator<T>{
    next(): MyIteratorResult<T>;
    hasNext():boolean;
}

export class UserIterator implements MyIterator<User>{
    private collection:UserCollection;
    private position:number;

    constructor(collection: UserCollection){
        this.collection = collection;
        this.position = 0;
    }

    hasNext(): boolean {
        if (this.position === this.collection.getItems().length){
            return false;
        }

        return true;
    }

    next():MyIteratorResult<User>{
        if (this.hasNext()){
            return {
                value: this.collection.getItems()[this.position++],
                done: false
            }
        }else{
            return {value: null, done: true}
        }
    }
}