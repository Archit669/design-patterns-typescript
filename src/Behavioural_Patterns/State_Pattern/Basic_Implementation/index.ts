interface LightState {
    switchState(lightSwitch: LightSwitch):void;
}


class OnState implements LightState{
    switchState(lightSwitch: LightSwitch): void {
        console.log("light is turning off");
        lightSwitch.setState(new OffState());
    }
}

class OffState implements LightState{
    switchState(lightSwitch: LightSwitch): void {
        console.log("light is turining on");
        lightSwitch.setState(new OnState());
    }
}

class LightSwitch{
    private state:LightState;
    constructor(state:LightState){
        this.state = state;
    }

    setState(state:LightState){
        this.state = state;
    }

    press():void{
        this.state.switchState(this);
    }
}

const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();
lightSwitch.press();
lightSwitch.press();
