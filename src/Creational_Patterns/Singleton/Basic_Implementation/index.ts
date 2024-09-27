class Singleton{
    private static instance:Singleton;
    private constructor(){
        if (Singleton.instance){
            throw new Error("Instance already instantiated...");
        }
    }

    public static getInstance(){
        if (Singleton.instance){
            return Singleton.instance;
        }

        Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}


const obj1:Singleton = Singleton.getInstance();
const obj2:Singleton = Singleton.getInstance();

console.log(obj1 === obj2);


// try to create instance of new object using reflection api
const obj3 = Reflect.construct(Singleton, []); // lead to error
console.log(obj3);