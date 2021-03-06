import { isUtilityClass } from "../isUtilityClass.ts";
import { assertEquals } from "../deps.ts";

Deno.test(
  "Returns true when the string exactly matches a utility class",
  () => {
    const utilityClass = "pt-4";
    const actual = isUtilityClass(utilityClass);
    assertEquals(actual, true);
  }
);

Deno.test(
  "Returns false when the string does not match a utility class",
  () => {
    const notUtilityClass = "around";
    const actual = isUtilityClass(notUtilityClass);
    assertEquals(actual, false);
  }
);
