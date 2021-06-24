import { R } from "./deps.ts";
import { headwindUtilities } from "./headwind.ts";
import { UtilitiyClassName, SearchResult } from "./types.d.ts";
import {
  validateSearchPhrase,
  lookUpUtilityClass,
  isUtilityClass,
  findMatchingUtilities,
} from "./fuzzySearch/index.ts";
import {
  validateOperator,
  tryParseString,
  satisfiesComparativeOperation,
  makeRange,
  inRange,
  filterPicker,
} from "./comparativeOperation/index.ts";
import { Operator } from "./types.d.ts";
import logger from "./common/logger.ts";

const { pipe, filter } = R;

export function searchByOnePhrase(searchPhrase: string): SearchResult[] {
  validateSearchPhrase(searchPhrase);
  logger.info(`Finding classes matching "${searchPhrase}"\n`);

  return isUtilityClass(searchPhrase)
    ? [lookUpUtilityClass(searchPhrase as UtilitiyClassName)]
    : findMatchingUtilities(searchPhrase, headwindUtilities);
}

export function searchByComparisonOperators(
  searchPhrase: string,
  operator: string,
  strNumber: string
) {
  const [cleanedSearchPhrase, cleanedOperator, cleanedValue] = [
    validateSearchPhrase(searchPhrase),
    validateOperator(operator),
    tryParseString(strNumber),
  ];
  const predicate = filterPicker(cleanedOperator as Operator, cleanedValue);
  return pipe(
    searchByOnePhrase,
    filter(satisfiesComparativeOperation(predicate))
  )(cleanedSearchPhrase);
}

function validateRangeOperator(op: string) {
  if (op.toLowerCase() !== "btw") {
    throw new Error(`Invalid Operator ${op}: Use 'btw' to search in range`);
  }
  return op;
}

export function searchInclusiveRange(
  searchPhrase: string,
  operator: string,
  strNumOne: string,
  strNumTwo: string
) {
  validateRangeOperator(operator);

  const [cleanedSearchPhrase, cleanedNumOne, cleanedNumTwo] = [
    validateSearchPhrase(searchPhrase),
    tryParseString(strNumOne),
    tryParseString(strNumTwo),
  ];

  const [start, end] = makeRange(cleanedNumOne, cleanedNumTwo);

  return pipe(
    searchByOnePhrase,
    filter(satisfiesComparativeOperation(inRange(start, end)))
  )(cleanedSearchPhrase);
}
