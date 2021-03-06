import { InvalidSearchPhraseError } from "./constants.ts";

export const validateSearchPhrase = (searchPhrase?: string): string | never => {
  if (!searchPhrase) throw new Error(InvalidSearchPhraseError.EmptyOrBadValue);
  return searchPhrase;
};
