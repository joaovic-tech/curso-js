import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFromA } from './module_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Roberto', age: 22 });
myDatabaseFunction.add({ name: 'Ana', age: 25 });
myDatabaseFunction.add({ name: 'Fabiana', age: 35 });
myDatabaseFunction.show();

console.log(myDatabaseFromA === myDatabaseFunction);
