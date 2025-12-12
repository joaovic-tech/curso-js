export function joinObject<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { host: 'http://localhost:' };
const obj2 = { port: 109238 };

const joinObjects = joinObject<{ host: string }, { port: number }>(obj1, obj2);
console.log(joinObjects);
