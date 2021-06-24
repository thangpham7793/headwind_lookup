import { searchByOnePhrase } from "../search.ts";
import { assertEquals, describe, it } from "../deps.ts";

describe("Integration Tests: Search", () => {
  describe("searchByOnePhrase", () => {
    it("Only returns a utility class object given a utility classname", () => {
      const utilityClass = "pt-4";
      const expected = [
        {
          "pt-4": {
            paddingTop: 16,
          },
        },
      ];
      const actual = searchByOnePhrase(utilityClass);
      assertEquals(actual, expected);
    });
  });

  it("Return results match both the headwind names and css values when possible", () => {
    const fuzzySearchString = `between`;
    const expected = [
      { "content-between": { alignContent: "space-between" } },
      { "justify-between": { justifyContent: "space-between" } },
    ];
    const actual = searchByOnePhrase(fuzzySearchString);
    assertEquals(actual[0], expected[0]);
    assertEquals(actual[1], expected[1]);
  });

  it("Return multiple results matching a given css property name", () => {
    const cssProp = `fontStyle`;
    const expected = [
      { italic: { fontStyle: "italic" } },
      { "no-italic": { fontStyle: "normal" } },
    ];
    const actual = searchByOnePhrase(cssProp);
    assertEquals(actual[0], expected[0]);
    assertEquals(actual[1], expected[1]);
  });

  it("Return multiple results matching a given css value", () => {
    const cssValue = `#462a16`;
    const expected = [
      { "bg-orange-darkest": { backgroundColor: "#462a16" } },
      { "border-orange-darkest": { borderColor: "#462a16" } },
      { "text-orange-darkest": { color: "#462a16" } },
    ];
    const actual = searchByOnePhrase(cssValue);
    assertEquals(actual[0], expected[0]);
    assertEquals(actual[1], expected[1]);
    assertEquals(actual[2], expected[2]);
  });
});
