import { search } from "./search.ts";
import { red } from "./deps.ts";
import { validateSearchPhrase } from "./validateSearchPhrase.ts";
import { SearchResult } from "./types.d.ts";

const prettyPrintResults = (res: SearchResult[]) =>
  res.forEach((res) => console.log(res));

export const programme = (searchPhrase: string) => {
  validateSearchPhrase(searchPhrase);
  console.info(`Finding classes matching "${searchPhrase}"\n`);

  let res: SearchResult[];

  try {
    res = search(searchPhrase);
    if (res.length === 0) console.info(`No matches found!`);
    prettyPrintResults(res);
  } catch (error) {
    console.error(red(error.message));
  }
};
