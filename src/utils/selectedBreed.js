import { renderBreedImage } from "./renderBreedImage";

const pageNumber = document.getElementById("page-number");

export function selectedBreed() {
  if (document.querySelector(".selectedBreed"))
    document.querySelector(".selectedBreed").classList.remove("selectedBreed");
  localStorage.setItem("index", 0);
  pageNumber.innerText = "";
  pageNumber.innerText = parseInt(localStorage.index) + 1;
  localStorage.setItem("breed", this.id);
  this.classList.add("selectedBreed");
  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then((r) => r.json())
    .then(renderBreedImage);
}
