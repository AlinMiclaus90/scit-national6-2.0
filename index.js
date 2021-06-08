console.log("start my journey!");

function showWorkingWithList() {
  let showList = document.getElementById("working-with-ul");
  showList.classList.toggle("show-list");
}

function showSkillsList() {
  let showList = document.getElementById("skills-ul");
  showList.classList.toggle("show-list");
}

function showLanguagesList() {
  let showList = document.getElementById("languages-ul");
  showList.classList.toggle("show-list");
}

document.getElementById("footer-address").addEventListener("click", () => {
  location.replace(
    "https://www.google.ro/maps/place/Comuna+Flore%C8%99ti/@46.7349695,23.4276082,13z/data=!3m1!4b1!4m5!3m4!1s0x4749101828c2d105:0x2832d71c41aed1b2!8m2!3d46.7312657!4d23.4783294"
  );
});
