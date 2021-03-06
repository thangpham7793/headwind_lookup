import { UtilitiyClassName } from "./types.d.ts";
import { headwindUtilities } from "./headwind.ts";

export const lookUpUtilityClass = (uc: UtilitiyClassName) => ({
  [uc]: headwindUtilities[uc],
});
