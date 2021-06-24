export function makeRange(numOne: number, numTwo: number) {
  const start = Math.min(Math.abs(numOne), Math.abs(numTwo));
  const end = Math.max(Math.abs(numOne), Math.abs(numTwo));
  return [start, end];
}
