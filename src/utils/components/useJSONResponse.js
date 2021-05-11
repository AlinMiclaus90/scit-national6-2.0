import { renderBreedNames } from "./renderBreedNames";

export function useJSONResponse(json) {
  var breedNamesObjects = Object.values(json);
  var breedNamesObject = breedNamesObjects[0];
  var breedListArray = Object.keys(breedNamesObject);
  renderBreedNames(breedListArray);
}
