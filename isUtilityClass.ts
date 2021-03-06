import { headwindUtilities } from "./headwind.ts";

export const isUtilityClass = (uc: string) => {
  const allClasses = Object.keys(headwindUtilities);
  return allClasses.includes(uc);
};
