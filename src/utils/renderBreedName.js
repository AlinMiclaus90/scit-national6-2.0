import { selectedBreed } from "./selectedBreed";

const allBreeds = document.getElementById("breeds");

export function renderBreedName(breedName) {
  const breed = document.createElement("p");
  allBreeds.appendChild(breed);
  breed.innerText = breedName;
  breed.setAttribute("id", breedName);
  breed.addEventListener("click", selectedBreed);
}
