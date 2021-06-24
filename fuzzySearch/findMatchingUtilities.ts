import { Utilities, SearchResult } from "../types.d.ts";

export const findMatchingUtilities = (
  searchPhrase: string,
  utilities: Utilities
): SearchResult[] => {
  const regex = new RegExp(searchPhrase, "i");
  const res: SearchResult[] = [];

  Object.entries(utilities).forEach(([utility, cssValue]) => {
    if (
      regex.test(`${utility}`) ||
      regex.test(`${Object.values(cssValue)[0]}`) ||
      regex.test(`${Object.keys(cssValue)[0]}`)
    ) {
      res.push({ [utility]: cssValue });
    }
  });
  return res;
};
