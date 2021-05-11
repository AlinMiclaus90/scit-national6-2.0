import { useJSONResponse } from "./useJSONResponse";

export function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => useJSONResponse(json));
}
