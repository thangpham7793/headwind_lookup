import { Operator } from "../types.d.ts";
import { R } from "../deps.ts";

const { values, join, pipe } = R;
const operators: Record<string, Operator> = {
  EQ: "eq",
  GTE: "gte",
  GT: "gt",
  LT: "lt",
  LTE: "lte",
};

export function validateOperator(operator: string) {
  if (!values(operators).includes(operator as Operator)) {
    throw new Error(
      `Invalid Operator: ${operator}. Please use one of ${pipe(
        values,
        join(", ")
      )(operators)}`
    );
  }
  return operator;
}
