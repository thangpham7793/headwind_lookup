import { SearchResult } from "./types.d.ts";
import { toBgHexColor } from "./toBgHexColor/index.ts";
import {
  searchByOnePhrase,
  searchByComparisonOperators,
  searchInclusiveRange,
} from "./search.ts";
import { InvalidSearchPhraseError } from "./fuzzySearch/constants.ts";
import logger from "./common/logger.ts";

const prettyPrintResults = (res: SearchResult[]) =>
  res.forEach((res) => {
    const possibleColorKeys = ["color", "borderColor", "backgroundColor"];
    const targetKey = Object.keys(Object.values(res)[0])[0];

    if (!possibleColorKeys.includes(targetKey)) return console.log(res);

    const color = Object.values(res)[0][targetKey];
    console.log(res, toBgHexColor(color));
  });

export const programme = (args: string[]) => {
  let res: SearchResult[] | undefined;
  if (args.length === 0) {
    throw new Error(InvalidSearchPhraseError.EmptyOrBadValue);
  }

  if (args.length === 1) {
    res = searchByOnePhrase(args[0]);
  }

  if (args.length === 3) {
    res = searchByComparisonOperators(args[0], args[1], args[2]);
  }

  if (args.length === 4) {
    res = searchInclusiveRange(args[0], args[1], args[2], args[3]);
  }

  if (!res || res.length === 0) return logger.info("No Matches Found!");
  prettyPrintResults(res as SearchResult[]);
};
