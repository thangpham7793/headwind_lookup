import { assertEquals, describe, it, assertThrows } from "../deps.ts";
import { tryParseString } from "./tryParseString.ts";

describe("tryParseString", () => {
  it("Given a string When has no number Then throws", () => {
    assertThrows(() => tryParseString("test"));
  });
  it("Given a string When has number Then returns parsed number", () => {
    assertEquals(tryParseString("20"), 20);
    assertEquals(tryParseString("66.67%"), 66.67);
    assertEquals(tryParseString("1.5"), 1.5);
  });
});
