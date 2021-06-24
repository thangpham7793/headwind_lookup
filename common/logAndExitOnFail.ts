import { R } from "../deps.ts";
import logger from "./logger.ts";

const { tryCatch } = R;

function defaultCatch(err: Error) {
  logger.error(err);
  Deno.exit(1);
}

export default function <SomeFunc>(
  tryer: SomeFunc,
  customCatch = defaultCatch
) {
  return tryCatch(tryer, customCatch);
}
