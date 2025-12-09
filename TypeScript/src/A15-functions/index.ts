export type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray = array.map(callbackfn);
  return newArray;
}

const words: string[] = ['a', 'b', 'c'];
const wordsMapped: string[] = mapStrings(words, (item) => item.toUpperCase());
console.log(wordsMapped);
