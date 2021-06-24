import { bgRgb24 } from "../deps.ts";
import { isHexColorStr } from "./isHexColorStr.ts";
import { toHexColor } from "./toHexColor.ts";

export function toBgHexColor(color: string) {
  if (!isHexColorStr(color)) return color;
  return bgRgb24("      ", toHexColor(color));
}
