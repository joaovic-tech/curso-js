type FilterCallback<U> = (value: U, index?: number, array?: U) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [33, 53, 12, 4, 99, 1, 7, 22, 8, 10];
const arrayFiltered = myFilter(array, (value) => value < 5);

console.log('Array original:', array);
console.log('\nArray filtrado:', arrayFiltered);
