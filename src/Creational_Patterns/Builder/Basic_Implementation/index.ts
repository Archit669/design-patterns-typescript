interface Builder{
    setPartA():void;
    setPartB():void;
    setPartC():void;
}

class ConcreteBuilder implements Builder{
    private product!:Product1;

    constructor(){
        this.reset();
    }

    reset():void{
        this.product = new Product1();
    }

    setPartA(): void {
        this.product.add("partA");
    }

    setPartB(): void {
        this.product.add("PartB");
    }

    setPartC(): void {
        this.product.add("PartB");
    }

    getProduct():Product1{
        const res = this.product;
        this.reset();
        return res;
    }
}

class Product1{
    private parts: string[];

    constructor(){
        this.parts = [];
    }

    add(part:string):void{
        this.parts.push(part)
    }

    listParts():void{
        console.log(`Product parts: ${this.parts.join(", ")}`);
    }
}

class Director{
    private builder: Builder;
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.setPartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}


function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);
  
    console.log("Standard basic product:");
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
  
    console.log("Standard full featured product:");
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
  
    // Remember, the Builder pattern can be used without a Director class.
    console.log("Custom product:");
    builder.setPartA();
    builder.setPartB();
    builder.getProduct().listParts();
  }
  
  const director = new Director();
  clientCode(director);

