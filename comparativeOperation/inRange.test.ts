import { assertEquals, describe, it } from "../deps.ts";
import { inRange } from "./inRange.ts";

describe("inRange", () => {
  it("Should correctly tell if a number is in an inclusive range", () => {
    assertEquals(inRange(10, 20)(10), true);
    assertEquals(inRange(10, 20)(20), true);
    assertEquals(inRange(10, 20)(15), true);

    assertEquals(inRange(10, 20)(30), false);
    assertEquals(inRange(10, 20)(0), false);
  });
});
