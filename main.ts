import { programme } from "./programme.ts";
import logAndExitOnFail from "./common/logAndExitOnFail.ts";

function main() {
  logAndExitOnFail(programme)(Deno.args);
}

main();
