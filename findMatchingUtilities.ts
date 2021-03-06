import { Utilities, SearchResult } from "./types.d.ts";

export const findMatchingUtilities = (
  searchPhrase: string,
  utilities: Utilities
): SearchResult[] => {
  const regex = new RegExp(searchPhrase, "i");
  let res: SearchResult[] = [];
  Object.entries(utilities).forEach(([utility, cssValue]) => {
    if (regex.test(`${Object.values(cssValue)[0]}`)) {
      res.push({ [utility]: cssValue });
    }
  });
  return res;
};
