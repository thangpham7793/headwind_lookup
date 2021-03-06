import { findMatchingUtilities } from "./findMatchingUtilities.ts";
import { headwindUtilities } from "./headwind.ts";
import { red } from "./deps.ts";
import { validateSearchPhrase } from "./validateSearchPhrase.ts";
import { SearchResult } from "./types.d.ts";

const prettyPrintResults = (res: SearchResult[]) =>
  res.forEach((res) => console.log(res));

function main() {
  const {
    args: [searchTerm],
  } = Deno;
  console.info(`Finding classes matching "${searchTerm}"\n`);
  let res: SearchResult[];
  try {
    res = findMatchingUtilities(
      validateSearchPhrase(searchTerm),
      headwindUtilities
    );
    if (res.length === 0) console.info(`No matches found!`);
    prettyPrintResults(res);
  } catch (error) {
    console.error(red(error.message));
  }
}

main();
