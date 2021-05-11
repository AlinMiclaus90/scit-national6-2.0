import { getData } from "./utils/components/getData";
import { backward, forward } from "./utils/components/images";
import { logout } from "./utils/logout";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", logout);

window.addEventListener("load", getData);

document.getElementById("forward").addEventListener("click", forward);
document.getElementById("backward").addEventListener("click", backward);
