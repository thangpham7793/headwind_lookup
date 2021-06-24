import { assertEquals, describe, it } from "../deps.ts";
import { filterPicker, satisfiesComparativeOperation } from "./index.ts";

describe("satisfiesComparativeOperation", () => {
  it("Given a utility class When has no str number value Then returns false", () => {
    const utilityClass = {
      flex: { display: "flex" },
    };
    const predicate = filterPicker("eq", 20);
    const actual = satisfiesComparativeOperation(predicate)(utilityClass);

    assertEquals(actual, false);
  });

  it("Given a utility class When contains number string & satisfies comparison predicate Then true", () => {
    const utilityClass = {
      "my-2/3": { marginTop: "66.66667%", marginBottom: "66.66667%" },
    };
    const predicate = filterPicker("eq", 66);
    const actual = satisfiesComparativeOperation(predicate)(utilityClass);

    assertEquals(actual, true);
  });
});
