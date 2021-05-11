import { renderBreedImage } from "./images";
import { renderBreedName } from "./renderBreedName";

const pageNumber = document.getElementById("page-number");

export function renderBreedNames(breedList) {
  for (const breedName of breedList) {
    renderBreedName(breedName);
  }
  if (localStorage.breed && localStorage.index) {
    document.getElementById(localStorage.breed).classList.add("selectedBreed");
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
      .then((response) => response.json())
      .then(renderBreedImage);
  }
}
