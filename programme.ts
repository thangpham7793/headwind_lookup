import { search } from "./search.ts";
import { red } from "./deps.ts";
import { validateSearchPhrase } from "./validateSearchPhrase.ts";
import { SearchResult } from "./types.d.ts";
import { toBgHexColor } from "./toBgHexColor/index.ts";

const prettyPrintResults = (res: SearchResult[]) =>
  res.forEach((res) => {
    const possibleColorKeys = ["color", "borderColor", "backgroundColor"];
    const targetKey = Object.keys(Object.values(res)[0])[0];

    if (!possibleColorKeys.includes(targetKey)) return console.log(res);

    const color = Object.values(res)[0][targetKey];
    console.log(res, toBgHexColor(color));
  });

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
