export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number | null {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value;
    return sum;
  }, 0);

  return result;
}

console.log(sum('2', '2'));
