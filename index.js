console.log("JavaScript - DOM Manipulation - Homework");

let sendButton = document.getElementById("send");

sendButton.addEventListener("click", function () {
  let inputList = document
    .getElementById("contact-form")
    .querySelectorAll(".input-field");

  for (let i = 0; i < inputList.length; i++) {
    let input = document
      .getElementById("contact-form")
      .querySelectorAll(".input-field")[i];

    console.log(input.value);
    if (input.value == "") {
      input.classList.add("red-class");
    } else {
      input.classList.remove("red-class");
    }
  }
  let formComplete = false;
  for (let i = 0; i < inputList.length; i++) {
    let input = document
      .getElementById("contact-form")
      .querySelectorAll(".input-field")[i];
    if (input.value !== "") {
      formComplete = true;
    } else {
      formComplete = false;
    }
  }
  if (formComplete === true) {
    document.getElementById("message").id = "message-sent";
   }

});

function changeClass () {
document.getElementById("message-sent").id = "message";
}

function checkContent() {
  let inputList = document
    .getElementById("contact-form")
    .querySelectorAll(".input-field");

  for (let i = 0; i < inputList.length; i++) {
    let input = document
      .getElementById("contact-form")
      .querySelectorAll(".input-field")[i];

    console.log(input.value);
    if (input.value == "") {
      input.classList.add("red-class");
    } else {
      input.classList.remove("red-class");
    }
  }
}
