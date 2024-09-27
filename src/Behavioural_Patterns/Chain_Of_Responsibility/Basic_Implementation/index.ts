interface Handler{
    setNext(handler:Handler):Handler;
    handle(request: string):string | null;
}

class AbstractHandler implements Handler{
    private nextHandler: Handler | null;
    setNext(handler: Handler):Handler{
        this.nextHandler = handler;
        return handler;
    }

    handle(request:string):string | null {
        if (this.nextHandler){
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class MonkeyHandler extends AbstractHandler{
    public handle(request: string): string | null {
        if (request === 'Banana'){
            return `Monkey  :I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null {
      if (request === "Nut") {
        return `Squirrel: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
}
  
class DogHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === "MeatBall") {
            return `Dog: I'll eat the ${request}.`;
        }
        
        return super.handle(request);
    }
}

function clientCode(handler:Handler){
    const foods = ["Nut", "Banana", "Cup of Coffee", "MeatBall"];

    for (let food of foods){
        console.log(`Who wants a ${food}?`);

        const result = handler.handle(food);

        if (result){
            console.log(`${result}`);
        }else{
            console.log(`${food} was left untouched.`);
        }
    }
}

const monkey = new MonkeyHandler();
const squirel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirel).setNext(dog);

clientCode(monkey);



