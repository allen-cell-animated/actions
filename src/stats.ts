export function mean(...numbers: number[]): number {
  return numbers.reduce((accum, next) => accum + next) / numbers.length;
}

export function range(...numbers: number[]): number {
  const largest = Math.max(...numbers);
  const smallest = Math.min(...numbers);
  return largest - smallest;
}
