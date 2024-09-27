interface Handler{
    setNext(handler: Handler):Handler;
    handle(order: Order): string | null;
}


class Order {
    isValid() {
      // Validate the order
      return true;
    }
  
    applyDiscount() {
      // Apply discount to the order
    }
  
    processPayment() {
      // Process payment
      return true;
    }
  
    ship() {
      // Ship the order
    }
  }


class AbstractHandler implements Handler{
    private nextHanlder: Handler;

    setNext(handler: Handler): Handler {
        this.nextHanlder = handler;
        return handler;
    }

    handle(order: Order): string | null {
        if (this.nextHanlder){
            return this.nextHanlder.handle(order);
        }

        return null;
    }
}

class ValidationHandler extends AbstractHandler{
    handle(order: Order): string | null {
        if (order.isValid()){
            return super.handle(order);
        }

        return "Validation failed";
    }
}

class DiscountHandler extends AbstractHandler {
    public handle(order: Order): string | null {
      order.applyDiscount();
      return super.handle(order);
    }
  }
  
class PaymentHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        if (order.processPayment()) {
            return super.handle(order);
        }
        
        return "Payment failed.";
    }
}

class ShippingHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        order.ship();
        return "Order processed and shipped.";
    }
}

const order = new Order();
const handler = new ValidationHandler();

handler
    .setNext(new DiscountHandler())
    .setNext(new PaymentHandler())
    .setNext(new ShippingHandler());


console.log(handler.handle(order))
