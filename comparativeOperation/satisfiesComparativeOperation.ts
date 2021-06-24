import { R } from "../deps.ts";
import { getCssNumberValues } from "./getCssNumberValues.ts";

const { pipe, any } = R;

export const satisfiesComparativeOperation = (
  predicate: (n: number) => boolean
) => pipe(getCssNumberValues, any(predicate));
