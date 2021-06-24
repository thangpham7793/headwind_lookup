import { headwindUtilities } from "./headwind.ts";

export type UtilitiyClassName = keyof typeof headwindUtilities;
export type CssValue = typeof headwindUtilities[UtilitiyClassName];
export type Utilities = Record<UtilitiyClassName, CssValue>;
export type SearchResult = Partial<Record<UtilitiyClassName, CssValue>>;

export type FilterByNumericOperator = (
  results: SearchResult[] | []
) => SearchResult[] | [];

export type Operator = "gt" | "gte" | "lt" | "lte" | "eq";
