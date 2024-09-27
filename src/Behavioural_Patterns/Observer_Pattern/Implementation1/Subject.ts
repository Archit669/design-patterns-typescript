import { Observer } from "./Observer";

export interface Subject{
    addObserver(observer:Observer):void;
    removeObserver(observer:Observer):void;
    notifyObservers():void;
    getState():number;
    setState(state:number):boolean;
}

export  class ConcreteSubject implements Subject{
    private state:number;
    private observers: Observer[];

    constructor(state:number){
        this.state = state;
        this.observers = [];
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(currObserver => currObserver != observer);
    }

    notifyObservers(): void {
        console.log("notify to all observers");
        for (let observer of this.observers){
            observer.update(this);
        }
    }

    getState(): number {
        return this.state;
    }

    setState(state: number): boolean {
        this.state = state;
        this.notifyObservers();
        return true;
    }
}