import { PaypalStrategy, CreditCardStrategy } from "./PaymentStrategy";
import { ShoppingCart } from "./ShoppingCart";

const cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);

cart.checkout();
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);
cart.addToCart(10);

cart.setPaymentStrategy(new CreditCardStrategy());
cart.checkout()