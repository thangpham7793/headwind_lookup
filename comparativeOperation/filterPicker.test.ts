import { assertEquals, describe, it } from "../deps.ts";
import { filterPicker } from "./filterPicker.ts";

describe("filterPicker", () => {
  it("Given an operator & value When valid Should return correct curried filter", () => {
    assertEquals(filterPicker("eq", 20)(20), true);
    assertEquals(filterPicker("lt", 20)(10), true);
    assertEquals(filterPicker("lte", 20)(20), true);
    assertEquals(filterPicker("gt", 20)(30), true);
    assertEquals(filterPicker("gte", 20)(40), true);
  });
});
