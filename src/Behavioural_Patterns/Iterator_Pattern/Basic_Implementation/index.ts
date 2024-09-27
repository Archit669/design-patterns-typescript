import { ArrayIterator } from "./ArrayIterator";

const it = new ArrayIterator([1,2,3,4]);

while(it.hasNext()){
    console.log(it.next());
}