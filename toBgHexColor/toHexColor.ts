function toHexColor(color: string) {
  return Number(color.replace(/#/, "0x"));
}

export { toHexColor };
