import { lookUpUtilityClass } from "./lookUpUtilityClass.ts";
import { isUtilityClass } from "./isUtilityClass.ts";
import { findMatchingUtilities } from "./findMatchingUtilities.ts";
import { headwindUtilities } from "./headwind.ts";
import { UtilitiyClassName, SearchResult } from "./types.d.ts";

export const search = (searchPhrase: string): SearchResult[] =>
  isUtilityClass(searchPhrase)
    ? [lookUpUtilityClass(searchPhrase as UtilitiyClassName)]
    : findMatchingUtilities(searchPhrase, headwindUtilities);
