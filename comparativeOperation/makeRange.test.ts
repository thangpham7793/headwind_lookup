import { assertEquals, describe, it } from "../deps.ts";
import { makeRange } from "./makeRange.ts";

describe("makeRange", () => {
  it("Should generate an array with start and end", () => {
    const expected = [10, 20];
    assertEquals(makeRange(10, 20), expected);
    assertEquals(makeRange(10, -20), expected);
    assertEquals(makeRange(-10, -20), expected);
    assertEquals(makeRange(-10, 20), expected);
  });
});
