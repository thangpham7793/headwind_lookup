import { R } from "../deps.ts";

const { values, pipe, map, concat, reduce, reject } = R;

export const getCssNumberValues = pipe(
  values,
  map(values),
  reduce(concat, []),
  map((v: string | number) => parseInt(v.toString())),
  reject((v: typeof NaN | number) => Number.isNaN(v))
);
