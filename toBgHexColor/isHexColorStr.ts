function isHexColorStr(color: string) {
  const hexStrRegex = new RegExp(/^#[a-f0-9]{6}$/i);
  return hexStrRegex.test(color);
}

export { isHexColorStr };
