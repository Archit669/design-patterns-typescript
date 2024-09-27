import { Subject } from "./Subject";

export interface Observer{
    update(Subject: Subject):void;
}

export  class ConcreteObserver implements Observer{
    constructor(private id:number){}
    update(subject: Subject): void {
        console.log(`observer with id ${this.id} is notified by state update of subject with id  ${subject.getState()}`)
    }
}