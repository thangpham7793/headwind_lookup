import { lookUpUtilityClass } from "../lookUpUtilityClass.ts";
import { assertEquals } from "../deps.ts";
import { headwindUtilities } from "../headwind.ts";

Deno.test(
  "Returns the class name and css value object given a valid utility class",
  () => {
    const utilityClass = "pt-4";
    const expected = { [utilityClass]: headwindUtilities[utilityClass] };
    const actual = lookUpUtilityClass(utilityClass);
    assertEquals(actual, expected);
  }
);
