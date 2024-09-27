class Logger{
    private static instance: Logger;

    private constructor(){
        if (Logger.instance){
            throw new Error("instance is already instantitated....");
        }
    }

    public static getInstance(){
        if (this.instance){
            return this.instance;
        }

        this.instance = new Logger();
        return this.instance;
    }

    public log(message:string):void{
        const timestamp = new Date();
        console.log(`[${timestamp.toLocaleDateString()}] - ${message}`);
    }
}


const logger1 = Logger.getInstance();
logger1.log("first log message");

const logger2 = Logger.getInstance();
logger2.log("second log message");

console.log(logger1 == logger2);
