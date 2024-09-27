import { Icommand } from "./Command";

export class SimpleRemoteControl{
    private commandQueue: Icommand[];
    private prevCommandStk: Icommand[];

    constructor(){
        this.commandQueue = [];
        this.prevCommandStk = [];
    }


    public setCommand(command:Icommand){
        this.commandQueue.push(command);
    }

    public pressButton():void{
        if (this.commandQueue.length === 0){
            throw new Error("no command was given..");
        }

        const front = this.commandQueue.shift();
        front?.execute();

        if (front) this.prevCommandStk.push(front);
    }

    public undoButton():void{
        if (this.prevCommandStk.length === 0){
            throw new Error("no command is there for undo..");
        }

        const top = this.prevCommandStk.pop();
        top?.undo();
    }


    public hasCommands():boolean{
        return this.commandQueue.length > 0;
    }
}