import { TurnOffCommand, TurnOnCommand } from "./Command";
import { SimpleRemoteControl } from "./SimpleRemoteControl";

const remote = new SimpleRemoteControl();
remote.setCommand(new TurnOffCommand())

remote.pressButton()
remote.undoButton()

