import { findMatchingUtilities } from "../findMatchingUtilities.ts";
import { assertArrayIncludes } from "../deps.ts";
import { headwindUtilities } from "../headwind.ts";

Deno.test(
  "Find all matching utility classes given a fully matched string search phrase",
  () => {
    const searchPhrase = "around";
    const actual = [
      {
        "content-around": {
          alignContent: "space-around",
        },
      },
      {
        "justify-around": {
          justifyContent: "space-around",
        },
      },
    ];
    const matches = findMatchingUtilities(searchPhrase, headwindUtilities);
    assertArrayIncludes(
      actual,
      [matches[0]],
      `Expect ${String(matches[0])} to be included`
    );
  }
);

Deno.test(
  "Find all matching utility classes given a partially matched string search phrase",
  () => {
    const searchPhrase = "arou";
    const actual = [
      {
        "content-around": {
          alignContent: "space-around",
        },
      },
      {
        "justify-around": {
          justifyContent: "space-around",
        },
      },
    ];
    const matches = findMatchingUtilities(searchPhrase, headwindUtilities);
    assertArrayIncludes(
      actual,
      [matches[0]],
      `Expect ${String(matches[0])} to be included`
    );
  }
);

Deno.test(
  "Find all matching utility classes given a number search phrase",
  () => {
    const searchPhrase = "900";
    const actual = [
      {
        "font-black": {
          fontWeight: 900,
        },
      },
    ];
    const matches = findMatchingUtilities(searchPhrase, headwindUtilities);
    assertArrayIncludes(
      actual,
      [matches[0]],
      `Expect ${String(matches[0])} to be included`
    );
  }
);
