export interface Observer{
    update(temperature:number, humidity:number, pressure:number):void;
}

export class CurrentConditionsDisplay implements Observer{
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    constructor(){}

    update(temperature: number | undefined, humidity: number | undefined, pressure: number | undefined): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }

    display():void{
        console.log(`current weather conditions are \n temperature - ${this.temperature} \n humidity - ${this.humidity} \n pressure - ${this.pressure} `)
    }
}