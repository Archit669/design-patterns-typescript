import { Observer } from "./Observer";

interface Subject{
    registerObserver(o:Observer):void;
    removeObserver(o:Observer):void;
    notifyObservers():void;
}

export class WeatherData implements Subject{
    private observers: Observer[];
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    constructor(){
        this.observers = [];
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        this.observers = this.observers.filter(observer => observer != o);
    }

    notifyObservers(): void {
        for (let observer of this.observers){
            observer.update(this.temperature!, this.humidity!, this.pressure!);
        }
    }

    setMeasurements(temperature:number, humidity:number, pressure:number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers();
    }
}