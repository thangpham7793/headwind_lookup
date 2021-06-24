import { Operator } from "../types.d.ts";
import { assertEquals, describe, it, assertThrows } from "../deps.ts";
import { validateOperator } from "./validateOperator.ts";

describe("validateOperator", () => {
  it("Given an operator When invalid operator Should throws", () => {
    assertThrows(() => validateOperator("equals" as Operator));
  });
  it("Given an operator When valid Then returns operator", () => {
    assertEquals(validateOperator("eq"), "eq");
    assertEquals(validateOperator("gt"), "gt");
    assertEquals(validateOperator("gte"), "gte");
    assertEquals(validateOperator("lte"), "lte");
    assertEquals(validateOperator("lt"), "lt");
  });
});
