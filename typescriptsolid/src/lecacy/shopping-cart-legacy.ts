type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Cart is empty');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(
      `Seu pedido com total de R$ ${this.total()} foi enviado com sucesso!`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Notebook', price: 5589.9 });
shoppingCart.addItem({ name: 'Camiseta', price: 19.9 });
shoppingCart.addItem({ name: 'Mouse', price: 139.9 });
shoppingCart.addItem({ name: 'Teclado', price: 299.9 });
shoppingCart.addItem({ name: 'Monitor', price: 1999.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
