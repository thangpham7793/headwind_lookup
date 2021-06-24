import { assertEquals } from "../deps.ts";
import { toHexColor } from "./toHexColor.ts";

Deno.test(
  "Given a hex color string When valid Should convert to hex number format",
  () => {
    const colorStr = "#3d4852";
    const expected = 0x3d4852;
    const actual = toHexColor(colorStr);
    assertEquals(actual, expected);
  }
);
