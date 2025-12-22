/**
 * LSP - Liskov substitution principle (Principio da substituição de Liskov)
 * Se ø(X) é uma propriedade demonstrável dos objetos x de tipo T. Então o ø(Y)
 * deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
 *
 * Resumo: Subtipo precisam ser substituídos por seus tipos de base.
 *
 * Ou seja: Se meu programa espera um Animal, algo do tipo dog (que herda Animal) deve servir como qualquer outro Animal.
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
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
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
