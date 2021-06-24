import { assertEquals, describe, it } from "../deps.ts";
import { getCssNumberValues } from "./getCssNumberValues.ts";

describe("filterPicker", () => {
  it("Given a search result When has a number or str number value Should return an array of number value", () => {
    const result = {
      "text-xs": { fontSize: 12 },
    };

    const expected = [12];

    const actual = getCssNumberValues(result);

    assertEquals(actual, expected);
  });

  it("Given a search result When has many number or str number values Should return an array of number values", () => {
    const result = { "-pin-tl-8": { top: -32, left: -32 } };

    const expected = [-32, -32];

    const actual = getCssNumberValues(result);

    assertEquals(actual, expected);
  });

  it("Given a search result When has both number & non-number values Should return an array of just number values", () => {
    const result = {
      "show-box": { borderWidth: 1, borderColor: "red", borderStyle: "solid" },
    };
    const expected = [1];

    const actual = getCssNumberValues(result);

    assertEquals(actual, expected);
  });
});
