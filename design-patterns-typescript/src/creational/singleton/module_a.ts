import { MyDatabaseFunction } from './db/my-database-function';

export const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'João', age: 22 });
myDatabaseFunction.add({ name: 'Maria', age: 25 });
myDatabaseFunction.add({ name: 'Pedro', age: 35 });
