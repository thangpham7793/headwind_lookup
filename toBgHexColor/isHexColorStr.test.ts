import { assertEquals } from "../deps.ts";
import { isHexColorStr } from "./isHexColorStr.ts";

Deno.test("Given a hex color string When valid Should confirm", () => {
  const colorStr = "#3d4852";
  const actual = isHexColorStr(colorStr);
  assertEquals(actual, true);
});

Deno.test("Given a hex color string When invalid Should reject", () => {
  const badColors = ["3d4852", "xxxxxxx", "#xyz123"];
  badColors.forEach((c) => assertEquals(isHexColorStr(c), false));
});
