import { search } from "../search.ts";
import { assertEquals } from "../deps.ts";

Deno.test(
  "Only returns a utility class object given a utility classname",
  () => {
    const utilityClass = "pt-4";
    const expected = [
      {
        "pt-4": {
          paddingTop: 16,
        },
      },
    ];
    const actual = search(utilityClass);
    assertEquals(actual, expected);
  }
);

Deno.test("Return multiple results matching a given css property name", () => {
  const cssProp = `fontStyle`;
  const expected = [
    { italic: { fontStyle: "italic" } },
    { "no-italic": { fontStyle: "normal" } },
  ];
  const actual = search(cssProp);
  assertEquals(actual[0], expected[0]);
  assertEquals(actual[1], expected[1]);
});

Deno.test("Return multiple results matching a given css value", () => {
  const cssValue = `#462a16`;
  const expected = [
    { "bg-orange-darkest": { backgroundColor: "#462a16" } },
    { "border-orange-darkest": { borderColor: "#462a16" } },
    { "text-orange-darkest": { color: "#462a16" } },
  ];
  const actual = search(cssValue);
  assertEquals(actual[0], expected[0]);
  assertEquals(actual[1], expected[1]);
  assertEquals(actual[2], expected[2]);
});
