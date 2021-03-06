import { validateSearchPhrase } from "./validateSearchPhrase.ts";
import { assertThrows, assertEquals } from "./deps.ts";

Deno.test("Throws when no search phrase is given", () => {
  const emptySearchPhrase = "";
  assertThrows(() => validateSearchPhrase(emptySearchPhrase));
});

Deno.test("Returns the search string when it is valid", () => {
  const validSearchString = "around";
  const expected = "around";
  const actual = validateSearchPhrase(validSearchString);
  assertEquals(actual, expected);
});
