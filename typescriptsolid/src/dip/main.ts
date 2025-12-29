/** DIP - Dependency Inversion Principle (Principio da inversão de dependência)
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classe de alto nível são classes que gerencia, as classes de baixo nível.
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Persistency } from './persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { Messaging } from './services/messaging';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();
// const individualCustomer = new IndividualCustomer(
//   'João',
//   'Alves',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'joaovic-tech',
  '12.345.678/0001-90',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

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
