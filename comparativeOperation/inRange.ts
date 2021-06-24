export function inRange(start: number, end: number) {
  return function (value: number) {
    return start <= value && value <= end;
  };
}
