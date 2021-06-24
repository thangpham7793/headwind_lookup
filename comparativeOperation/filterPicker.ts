import { Operator } from "../types.d.ts";
import { R } from "../deps.ts";

const { flip, gt, lt, lte, gte, equals } = R;
const operators: Record<string, Operator> = {
  EQ: "eq",
  GTE: "gte",
  GT: "gt",
  LT: "lt",
  LTE: "lte",
};
const filterByOperator = {
  [operators.EQ]: flip(equals),
  [operators.GT]: flip(gt),
  [operators.LT]: flip(lt),
  [operators.GTE]: flip(gte),
  [operators.LTE]: flip(lte),
};

export function filterPicker(operator: Operator, value: number) {
  return filterByOperator[operator](value);
}
