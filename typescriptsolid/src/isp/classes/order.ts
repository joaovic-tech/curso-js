import { Messaging } from '../services/messaging';
import { OrderStatus } from './interfaces/ordem-status';
import { Persistency } from '../persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging, // injeção de dependencies
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Cart is empty');
      return;
    }
    this._orderStatus = 'closed';

    this.messaging.sendMessage(
      `Seu pedido com total de R$ ${this.cart.totalWithDiscount()} foi enviado com sucesso!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
