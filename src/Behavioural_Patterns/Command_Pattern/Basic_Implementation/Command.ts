import { Light } from "./Light";

export interface Icommand{
    execute():void;
    undo(): void;
}

export class TurnOnCommand implements Icommand{
    private light: Light = new Light();
    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

export class TurnOffCommand implements Icommand{
    private light: Light = new Light();
    execute(): void {
        this.light.turnOff();
    }
    undo(): void {
        this.light.turnOn();
    }
}