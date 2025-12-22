import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

// Adicionando itens ao carrinho
shoppingCart.addItem(new Product('Notebook', 5589.9));
shoppingCart.addItem(new Product('Camiseta', 19.9));
shoppingCart.addItem(new Product('Mouse', 139.9));
shoppingCart.addItem(new Product('Teclado', 299.9));
shoppingCart.addItem(new Product('Monitor', 1999.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount(0.5));
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
