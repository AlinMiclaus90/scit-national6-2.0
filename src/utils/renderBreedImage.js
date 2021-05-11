let storedImage = [];

const images = document.getElementById("breed-image");
const buttonBackward = document.getElementById("backward");
const buttonForward = document.getElementById("forward");
const pageNumber = document.getElementById("page-number");

export function renderBreedImage(image) {
  var breedImagesObjects = Object.values(image);
  storedImage = breedImagesObjects[0];
  if (localStorage.index) images.src = storedImage[localStorage.index];
  else images.src = storedImage[0];
}

buttonForward.addEventListener("click", function () {
  if (document.querySelector(".selectedBreed")) {
    if (localStorage.index < storedImage.length - 1) {
      localStorage.index++;
    }
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    images.src = storedImage[localStorage.index];
  }
});

buttonBackward.addEventListener("click", function () {
  if (document.querySelector(".selectedBreed")) {
    if (localStorage.index >= 1) {
      localStorage.index--;
    }
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    images.src = storedImage[localStorage.index];
  }
});
