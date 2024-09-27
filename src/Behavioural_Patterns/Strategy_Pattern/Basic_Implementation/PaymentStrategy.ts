export interface PaymentStrategy{
    pay(amount:number):void;
}

export class PaypalStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`pay ${amount} using paypal strategy`);
    }
}

export class CreditCardStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`pay ${amount} using credit card strategy`);
    }
}