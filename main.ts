import { programme } from "./programme.ts";

function main() {
  const {
    args: [searchTerm],
  } = Deno;
  programme(searchTerm);
}

main();
