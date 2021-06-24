export function tryParseString(str: string) {
  const maybeNumber = parseFloat(str);
  if (Number.isNaN(maybeNumber)) {
    throw new Error(`Value To Compare Against is Not a Number: "${str}"`);
  }
  return maybeNumber;
}
