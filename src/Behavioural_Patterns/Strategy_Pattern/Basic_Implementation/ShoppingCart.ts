import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart{
    private amount:number;
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy){
        this.amount = 0;
        this.strategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy):void{
        this.strategy = strategy;
    }

    addToCart(value:number){
        this.amount += value;
    }

    checkout(){
        this.strategy.pay(this.amount);
        this.amount = 0;
    }
}